import * as React from 'react';
import {Spin} from "antd";

interface LoadingProps {

}

const Loading: React.FC<LoadingProps> = ({}) => {

  return (
    <div className="loader">
      <Spin/>
    </div>
  )
};

export default React.memo<LoadingProps>(Loading);