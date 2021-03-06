/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SingleMatch from './SingleMatch.js';

function scrollToTop() {
  //   console.log('scroll');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function MatchesBoard({ matchesData }) {
  return (
    <div className='matches_board'>
      {/* Looping through each match from the fetch performed in index.js */}
      {matchesData.map((match) => (
        <SingleMatch key={match.gameId} matchData={match} />
      ))}
      <button className='back_to_top' onClick={scrollToTop} id='myBtn' title='Go to top'>
        Back to Top ▲
      </button>
    </div>
  );
}

// =============================================================================
//
// =============================================================================
MatchesBoard.propTypes = {
  matchesData: PropTypes.array,
  loading: PropTypes.bool,
};

export default MatchesBoard;
