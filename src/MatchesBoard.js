import React, { } from "react";
import PropTypes from 'prop-types';
import SingleMatch from './SingleMatch.js';

function MatchesBoard(props) {
  
    return (
        <div className="matches_board">
            { props.matchesData.map(match => <SingleMatch key={match.id} matchData={match}/>) }
        </div>
  );
}
// map to => <li key={match.id}>{match.home_team.full_name}</li>

    //   <div>
    //       { props.matchesData[1] ? <p>{props.matchesData[1].date}</p> : <p>Loading match info...</p> }
    //   </div>

// =============================================================================
// 
// =============================================================================
MatchesBoard.propTypes = {
    matchesData: PropTypes.array,
    id: PropTypes.number,
    date: PropTypes.string,
    testProp: PropTypes.string
}

export default MatchesBoard