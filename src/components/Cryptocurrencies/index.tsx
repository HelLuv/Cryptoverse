import * as React from 'react';

interface CryptocurrenciesProps {
  simplified?: boolean;
}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({simplified}) => {

  return (
    <h1>Cryptocurrencies</h1>
  )
};

export default React.memo<CryptocurrenciesProps>(Cryptocurrencies);