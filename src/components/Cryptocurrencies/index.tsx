import * as React from 'react';

interface CryptocurrenciesProps {

}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({}) => {

  return (
    <h1>Cryptocurrencies</h1>
  )
};

export default React.memo<CryptocurrenciesProps>(Cryptocurrencies);