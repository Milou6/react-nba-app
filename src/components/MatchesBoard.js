
import React, {  } from "react";
import PropTypes from 'prop-types';
import SingleMatch from './SingleMatch.js';

function MatchesBoard(props) {
 
    return (
        <div className="matches_board">
            {/* Looping through each match from the fetch performed in index.js */}
            { props.matchesData.map(match => <SingleMatch key={match.gameId} matchData={match} detailsShowing={false} />) }
        </div>
    );
}

// =============================================================================
// 
// =============================================================================
MatchesBoard.propTypes = {
    matchesData: PropTypes.array
}

export default MatchesBoard