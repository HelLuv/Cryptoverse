import * as React from 'react';
import millify from 'millify';
import {Collapse, Row, Col, Typography, Avatar} from 'antd';
import HTMLReactParser from 'html-react-parser';

import {useGetExchangesQuery} from '../../services/cryptoApi';
import {Loading} from '../../components';
import {IExchange} from "../../models/IExchange";
import KeyBuilder from "../../utils/KeyBuilder";

const {Text} = Typography;
const {Panel} = Collapse;

interface ExchangesProps {

}

const Exchanges: React.FC<ExchangesProps> = ({}) => {

  const {data, isFetching} = useGetExchangesQuery(50);
  const exchangesList = data?.data?.exchanges;
  if (isFetching) return <Loading/>;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {
          exchangesList?.length ? exchangesList?.map((exchange: IExchange) => (
              <Col span={24} key={KeyBuilder.build}>
                <Collapse>
                  <Panel
                    key={exchange.uuid}
                    showArrow={false}
                    header={(
                      <Row key={exchange.uuid}>
                        <Col span={6}>
                          <Text><strong>{exchange.rank}.</strong></Text>
                          <Avatar className="exchange-image" src={exchange.iconUrl}/>
                          <Text><strong>{exchange.name}</strong></Text>
                        </Col>
                        <Col span={6}>${millify(exchange.volume)}</Col>
                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                      </Row>
                    )}
                  >
                    {HTMLReactParser(exchange.description || '')}
                  </Panel>
                </Collapse>
              </Col>
            ))
            : <h1>This endpoint is disabled for your subscription</h1>
        }
      </Row>
    </>
  )
};

export default React.memo<ExchangesProps>(Exchanges);