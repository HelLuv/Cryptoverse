import * as React from 'react';

interface ExchangesProps {

}

const Exchanges: React.FC<ExchangesProps> = ({}) => {

  return (
    <h1>Exchanges</h1>
  )
};

export default React.memo<ExchangesProps>(Exchanges);