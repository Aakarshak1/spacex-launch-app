import React from 'react';
import './launchList.css';

import MissionCard from '../MissionCard/MissionCard.js';
import Loading from '../Loading/Loading';

const LaunchList = ({ list }) => {
  return (
    <div className="list">
      {list ? (
        list.length ? (
          list.map((launchDetails, i) => (
            <MissionCard launch={launchDetails} key={`MissionCard-${i}`} />
          ))
        ) : (
          <Loading type="Notfound" />
        )
      ) : (
        <Loading type="Loading" />
      )}
    </div>
  );
};

export default LaunchList;
