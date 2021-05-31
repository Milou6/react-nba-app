import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameDetails from './GameDetails.js';
import teamLogos from './teamLogos.js';

import { Link } from 'react-router-dom';

function SingleMatch(props) {
  // State to render/hide match details
  const [showingDetails, setShowingDetails] = useState(false);

  // Show/hide match details
  const handleDetailsClick = () => {
    setShowingDetails(!showingDetails);
  };

  return (
    <div className='single_match'>
      <div className='match_date'>{props.matchData.startTimeUTC.slice(0, 10)}</div>

      <div className='horizontal_items'>
        <div className='home_team'>
          <Link
            to={{
              pathname: `/teamDetails/${props.matchData.hTeam.teamId}`,
              state: { teamName: props.matchData.hTeam.fullName },
            }}
          >
            {teamLogos.get(props.matchData.hTeam.teamId)}
          </Link>
          <div className='bold'>{props.matchData.hTeam.fullName}</div>
        </div>

        <div className='match_score bold'>
          {props.matchData.hTeam.score.points ? props.matchData.hTeam.score.points : '.'}
        </div>
        <div className='separator'></div>
        <div className='match_score bold'>
          {props.matchData.vTeam.score.points ? props.matchData.vTeam.score.points : '.'}
        </div>

        <div className='visitor_team'>
          <Link
            to={{
              pathname: `/teamDetails/${props.matchData.vTeam.teamId}`,
              state: { teamName: props.matchData.vTeam.fullName },
            }}
          >
            {teamLogos.get(props.matchData.vTeam.teamId)}
          </Link>
          <div className='bold'>{props.matchData.vTeam.fullName}</div>
        </div>
      </div>

      {/* Only show match details if requested*/}
      {showingDetails ? (
        <GameDetails ID={props.matchData.gameId} backFromDetails={handleDetailsClick} />
      ) : (
        <div className='btn' onClick={handleDetailsClick}>
          GAME DETAILS
        </div>
      )}
    </div>
  );
}

// =============================================================================
//
// =============================================================================
SingleMatch.propTypes = {
  matchData: PropTypes.object,
  detailsShowing: PropTypes.bool,
};

export default SingleMatch;
