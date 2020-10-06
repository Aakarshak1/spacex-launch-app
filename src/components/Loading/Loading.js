import React from 'react';
import Loader from 'react-loader-spinner';

import notFound from '../../assets/No-Result.webp';
const loader = (
  <Loader
    type="Puff"
    color="#000"
    height={100}
    width={100}
    timeout={2000} //3 secs
  />
);

const Loading = (props) => {
  return (
    <div className="loading">
      {props.type === 'Loading' ? (
        loader
      ) : (
        <img src={notFound} alt="no-result" />
      )}
      <div className="text" data-testid="loadingStatus">
        {props.type === 'loading' ? 'Loading...' : 'No Result Found'}
      </div>
    </div>
  );
};

export default Loading;
