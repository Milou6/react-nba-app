/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/react';

function GameDetails(props) {
  const [gameDetails, setGameDetails] = useState([]);
  const [gameStats, setGameStats] = useState([]);

  useEffect(async (ID) => {
    try {
      // const response = await fetch('./testData/TESTING_game_details.json');
      const response = await fetch(
        `../../.netlify/functions/fetchNbaData?path=gameDetails/${props.ID}`
      );

      // console.log(response);
      const jsonResponse = await response.json();
      // console.log(jsonResponse);

      // IF USING TESTING DATA, PLEASE USE THE SECOND arrayResponse BELOW
      let arrayResponse = [...jsonResponse.api.game];
      // let arrayResponse = [...jsonResponse.api.games];

      // Gotta remember to get first item of array, otherwise "Loading checks below don't work!"
      setGameDetails(arrayResponse[0]);
      // console.log(arrayResponse[0]);
    } catch (err) {
      console.log(err);
    }

    try {
      // Fetching game statistics
      // const response2 = await fetch('./testData/TESTING_game_stats.json');
      const response2 = await fetch(
        `../../.netlify/functions/fetchNbaData?path=statistics/games/gameId/${props.ID}`
      );

      const jsonResponse2 = await response2.json();
      let arrayResponse2 = [...jsonResponse2.api.statistics];

      setGameStats(arrayResponse2);
      // console.log(arrayResponse2);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const loaderStyle = css`
    display: block;
    margin: 30px 30px;
  `;

  return (
    <div>
      {gameDetails ? (
        <div className='game_details'>
          <div>City : {gameDetails.city ? gameDetails.city : <BeatLoader color='navy' />}</div>
          <div>Arena : {gameDetails.arena ? gameDetails.arena : <BeatLoader color='navy' />}</div>

          <div className='horizontal_items'>
            {gameStats[0] ? (
              <div className='details_home'>
                <div>
                  <p className='floatL'>Biggest Lead:</p>
                  <p className='floatR bold'>{gameStats[0].biggestLead}</p>
                </div>
                <div>
                  <p className='floatL'>Longest Run:</p>
                  <p className='floatR bold'>{gameStats[0].longestRun}</p>
                </div>
                <div>
                  <p className='floatL'>Assists:</p>
                  <p className='floatR bold'>{gameStats[0].assists}</p>
                </div>
                <div>
                  <p className='floatL'>Steals:</p>
                  <p className='floatR bold'>{gameStats[0].steals}</p>
                </div>
                <div>
                  <p className='floatL'>Turnovers:</p>
                  <p className='floatR bold'>{gameStats[0].turnovers}</p>
                </div>
                <div>
                  <p className='floatL'>Blocks:</p>
                  <p className='floatR bold'>{gameStats[0].blocks}</p>
                </div>
              </div>
            ) : (
              <BeatLoader css={loaderStyle} color='navy' />
            )}

            <div className='separator'></div>

            {gameStats[1] ? (
              <div className='details_visitor'>
                <div>
                  <p className='floatL'>Biggest Lead:</p>
                  <p className='floatR bold'>{gameStats[1].biggestLead}</p>
                </div>
                <div>
                  <p className='floatL'>Longest Run:</p>
                  <p className='floatR bold'>{gameStats[1].longestRun}</p>
                </div>
                <div>
                  <p className='floatL'>Assists:</p>
                  <p className='floatR bold'>{gameStats[1].assists}</p>
                </div>
                <div>
                  <p className='floatL'>Steals:</p>
                  <p className='floatR bold'>{gameStats[1].steals}</p>
                </div>
                <div>
                  <p className='floatL'>Turnovers:</p>
                  <p className='floatR bold'>{gameStats[1].turnovers}</p>
                </div>
                <div>
                  <p className='floatL'>Blocks:</p>
                  <p className='floatR bold'>{gameStats[1].blocks}</p>
                </div>
              </div>
            ) : (
              <BeatLoader css={loaderStyle} color='navy' />
            )}
          </div>
        </div>
      ) : (
        <div>Loading assets...</div>
      )}
      <div className='btn' onClick={props.backFromDetails}>
        BACK
      </div>
    </div>
  );
}

// =============================================================================
//
// =============================================================================
GameDetails.propTypes = {
  gameDetails: PropTypes.array,
  gameStats: PropTypes.array,
  backFromDetails: PropTypes.func,
  ID: PropTypes.string,
};

export default GameDetails;
