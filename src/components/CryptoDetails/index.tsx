import * as React from 'react';

interface CryptoDetailsProps {

}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({}) => {

  return (
    <h1>CryptoDetails</h1>
  )
};

export default React.memo<CryptoDetailsProps>(CryptoDetails);