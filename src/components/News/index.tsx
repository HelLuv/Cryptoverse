import * as React from 'react';

interface NewsProps {

}

const News: React.FC<NewsProps> = ({}) => {

  return (
    <h1>News</h1>
  )
};

export default React.memo<NewsProps>(News);