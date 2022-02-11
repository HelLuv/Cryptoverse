import * as React from 'react';
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import moment from "moment";

import {useGetCryptoNewsQuery} from "../../services/cryptoNewsApi";
import {useGetCryptosQuery} from "../../services/cryptoApi";
import {Loading} from "../index";
import {INewsItem} from "../../models/INewsItem";
import KeyBuilder from "../../utils/KeyBuilder";
import {ICoin} from "../../models/ICoins";

const {Text, Title} = Typography;
const {Option} = Select;

const noImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

interface NewsProps {
  simplified?: boolean;
}

const News: React.FC<NewsProps> = ({simplified}) => {
  const [newsCategory, setNewsCategory] = React.useState("Cryptocurrency");
  const {data: cryptoList, isFetching: isCryptosFetching} = useGetCryptosQuery(100);
  const {data: cryptoNews, isFetching: isNewsFetching} = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 18
  });


  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            loading={isCryptosFetching}
            value={newsCategory}
            onChange={(value) => setNewsCategory(value)}
            // @ts-ignore
            filterOption={(input, option) => option?.children?.toLowercase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {cryptoList?.data?.coins.map((currency: ICoin) => <Option value={currency.name}
                                                                      key={KeyBuilder.build}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {(isNewsFetching || !cryptoNews?.value)
        ? <Col xs={24} sm={24} lg={24} key={KeyBuilder.build}> <Loading/></Col>
        : <> {cryptoNews?.value.map((news: INewsItem) => (
          <Col xs={24} sm={12} lg={8} key={KeyBuilder.build}>
            <Card hoverable className="news-card">
              <div className="news-info">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title"
                           level={4}>{news.name}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || noImage} alt={news.name}/>
                  </div>
                </a>
                <p>{news.description.length > 300 ? `${news.description.substring(0, 300)}...` : news.description}</p>
              </div>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || noImage} alt={news.provider[0].name}/>
                  <Text className="provider-name">{news.provider[0].name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('h').fromNow()}</Text>
              </div>
            </Card>
          </Col>
        ))}
        </>}
    </Row>
  )
};

export default React.memo<NewsProps>(News);