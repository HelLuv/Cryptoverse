import * as React from 'react';

interface NewsProps {
  simplified?: boolean;
}

const News: React.FC<NewsProps> = ({simplified}) => {

  return (
    <h1>News</h1>
  )
};

export default React.memo<NewsProps>(News);