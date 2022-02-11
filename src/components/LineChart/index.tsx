import * as React from 'react';

interface ComponentProps {

}

const LineChart: React.FC<ComponentProps> = ({}) => {

  return (
    <h1>LineChart</h1>
  )
};

export default React.memo<ComponentProps>(LineChart);