import React from 'react';

import './MissionCard.css';

const MissionCard = ({ launch }) => {
  return (
    <div className="Missioncard">
      <div className="card-body">
        <div className="img">
          <img src={launch.links.mission_patch_small} alt="rocket" />
        </div>
        <label className="label">
          {`${launch.mission_name} #${launch.flight_number}`}
        </label>
        <div className="missions">
          <strong>Mission Ids: </strong>
          {launch.mission_id.length ? (
            <ul>
              {launch.mission_id.map((id, i) => (
                <li key={`mid-${i}`}> {id} </li>
              ))}
            </ul>
          ) : (
            <span> NA</span>
          )}
        </div>
        <div>
          <strong>Launch Year: </strong>
          <span>{launch.launch_year}</span>
        </div>
        <div>
          <strong>Successful Launch:</strong>
          <span>{launch.launch_success ? ' Yes' : ' No'}</span>
        </div>
        <div>
          <strong>Successful Landing:</strong>
          <span>
            {launch.rocket.first_stage.cores[0].land_success ? ' Yes' : ' No'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
