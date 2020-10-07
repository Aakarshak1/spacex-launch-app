import React from 'react';
import PropTypes from 'prop-types';

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

LaunchList.propTypes = {
  list: PropTypes.array.isRequired,
};
export default LaunchList;
