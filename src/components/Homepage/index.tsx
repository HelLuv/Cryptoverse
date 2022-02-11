import * as React from 'react';

interface HomepageProps {

}

const Homepage: React.FC<HomepageProps> = ({}) => {

  return (
    <h1>Homepage</h1>
  )
};

export default React.memo<HomepageProps>(Homepage);