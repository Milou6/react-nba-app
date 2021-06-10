import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/BeatLoader';
import teamLogos from './teamLogos.js';

/**
 * This component is quite complex, could eventually be split into 2 sub-components.
 */

function TeamDetails({ match, location }) {
  // We need 2 different fetch() here to get all team details
  const [teamStandings, setTeamStandings] = useState();
  const [teamPlayers, setTeamPlayers] = useState();

  useEffect(async () => {
    try {
      // const response = await fetch('../testData/TESTING_team_standings.json');
      const response = await fetch(
        `../.netlify/functions/fetchNbaData?path=standings/standard/2020/teamId/${match.params.teamId}`
      );

      const jsonResponse = await response.json();
      let arrayResponse = [...jsonResponse.api.standings];

      // Gotta remember to get first item of array, otherwise "Loading checks below don't work!"
      setTeamStandings(arrayResponse[0]);
      // console.log(arrayResponse[0]);
    } catch (err) {
      console.log(err);
    }

    try {
      // const response = await fetch('../testData/TESTING_team_players.json');
      const response = await fetch(
        `../.netlify/functions/fetchNbaData?path=players/teamId/${match.params.teamId}`
      );

      const jsonResponse = await response.json();
      let arrayResponse = [...jsonResponse.api.players];

      // Gotta remember to get first item of array, otherwise "Loading checks below don't work!"
      setTeamPlayers(arrayResponse);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='card team_details'>
      <h1>{teamLogos.get(match.params.teamId)}</h1>
      <h1>{location.state.teamName}</h1>

      {/* Team Standings */}
      <h2>Standings:</h2>
      {teamStandings ? (
        <div className='horizontal_items'>
          <div className='standing'>
            <div>
              <p className='floatL'>League:</p>
              <p className='floatR bold'>{teamStandings.league}</p>
            </div>
            <div>
              <p>.</p>
            </div>
            <div>
              <p className='floatL'>Wins:</p>
              <p className='floatR'>{teamStandings.win}</p>
            </div>
            <div>
              <p className='floatL'>Losses:</p>
              <p className='floatR'>{teamStandings.loss}</p>
            </div>
          </div>
          <div className='separator'></div>

          <div className='standing'>
            <div>
              <p className='floatL'>Conference:</p>
              <p className='floatR bold'>{teamStandings.conference.name}</p>
            </div>
            <div>
              <p className='floatL'>Rank:</p>
              <p className='floatR'>{teamStandings.conference.rank}</p>
            </div>
            <div>
              <p className='floatL'>Wins:</p>
              <p className='floatR'>{teamStandings.conference.win}</p>
            </div>
            <div>
              <p className='floatL'>Losses:</p>
              <p className='floatR'>{teamStandings.conference.loss}</p>
            </div>
          </div>
          <div className='separator'></div>

          <div className='standing'>
            <div>
              <p className='floatL'>Division:</p>
              <p className='floatR bold'>{teamStandings.division.name}</p>
            </div>
            <div>
              <p className='floatL'>Rank:</p>
              <p className='floatR'>{teamStandings.division.rank}</p>
            </div>
            <div>
              <p className='floatL'>Wins:</p>
              <p className='floatR'>{teamStandings.division.win}</p>
            </div>
            <div>
              <p className='floatL'>Losses:</p>
              <p className='floatR'>{teamStandings.division.loss}</p>
            </div>
          </div>
        </div>
      ) : (
        <BeatLoader color='navy' />
      )}

      {/* Team Players table */}
      <h2>Players:</h2>
      {teamPlayers ? (
        <div className='tableFixed'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth</th>
                <th>College</th>
                <th>Years Pro</th>
                <th>Height (m)</th>
                <th>Weight (Kg)</th>
              </tr>
            </thead>

            <tbody>
              {teamPlayers.map((player) => (
                <tr key={player.playerId}>
                  <td>{`${player.firstName} ${player.lastName}`}</td>
                  <td>{player.dateOfBirth == '' ? '.' : player.dateOfBirth}</td>
                  <td>{player.collegeName == '' ? '.' : player.collegeName}</td>
                  <td>{player.yearsPro}</td>
                  <td>{player.heightInMeters == '' ? '.' : player.heightInMeters}</td>
                  <td>{player.weightInKilograms == '' ? '.' : player.weightInKilograms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <BeatLoader color='navy' />
      )}
    </div>
  );
}

// =============================================================================
//
// =============================================================================
TeamDetails.propTypes = {
  teamStandings: PropTypes.array,
  teamPlayers: PropTypes.array,
  teamId: PropTypes.string,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default TeamDetails;
