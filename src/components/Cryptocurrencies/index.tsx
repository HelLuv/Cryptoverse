import * as React from 'react';
import millify from "millify";
import {Link} from "react-router-dom";
import {Card, Row, Col, Input} from "antd";

import {useGetCryptosQuery} from "../../services/cryptoApi";
import {Loading} from "../index";
import {ICoin} from "../../models/ICoins";
import KeyBuilder from "../../utils/KeyBuilder";

interface CryptocurrenciesProps {
  simplified?: boolean;
}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data: cryptoList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = React.useState<Array<ICoin>>([]);
  const [searchTerm, setSearchTerm] = React.useState("");


  React.useEffect(() => {
    setCryptos(cryptoList?.data?.coins ?? []);

    const filteredList = cryptoList?.data?.coins?.filter((item: ICoin) => item?.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredList)
  }, [cryptoList, searchTerm])

  if (isFetching) return <Loading/>


  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrencies"
                 onChange={(e) => setSearchTerm(e?.target?.value.toLowerCase())}
          />
        </div>
      )
      }
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={KeyBuilder.build}>
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card
                title={`${currency?.rank} ${currency?.name}`}
                extra={<img className="crypto-image" src={currency?.iconUrl} alt={currency?.name}/>}
                hoverable
              >
                <p>Price: {millify(+currency?.price)}</p>
                <p>Market Cap: {millify(+currency?.marketCap)}</p>
                <p>Daily Change: {millify(+currency?.change)}%</p>
                {/*// @ts-ignore*/}
                <p>24h Volume: {millify(+currency["24hVolume"])}</p>
              </Card>

            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
};

export default React.memo<CryptocurrenciesProps>(Cryptocurrencies);