/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import games from "./games.json";
import PropTypes from 'prop-types';
import MatchesBoard from './MatchesBoard.js'
import './index.css';

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // import * as NBAIcons from 'react-nba-logos';
// // import * as path from 'path';
// // import games from "./games.json";

// // ReactDOM.render(
// //   <div>
// //     <NBAIcons.TOR />
// //     <NBAIcons.NYK size={140} />
// //   </div>,
// //   document.getElementById('root')
// // );



// /* What we want to display in match div :
// *  game.date
// *  game.home_team.full_name
// *  game.home_team_score

// *  game.visitor_team.full_name
// *  game.visitor_team_score
// */


// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

function SearchResults(props) {
  const [games, setGames] = useState([])

  useEffect(async () => {

    try {
      // const response = await fetch("https://www.balldontlie.io/api/v1/games?start_date='2021-04-17'&end_date='2021-05-17'");
      // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      // const response = await fetch("C:/Users/haas_/Downloads/NBA/nba_react/src/games.json");
      const response = await fetch("./games.json");
      console.log(response);
      const jsonResponse = await response.json();
      const item = jsonResponse;
      console.log(jsonResponse);
      setGames([...item.data]);
    }
    catch(err) { console.log(err);}

    //return () => { /*ignore = true;*/ }
  }, []);
  // });

  return (
    <div>
      <p>working?</p>
      {games ? <MatchesBoard matchesData={games} testProp="testProp" /> : <p>LOADING MATCHES</p>}
    </div>
  );
}
// {games.map(game => <li key={game.id}>{game.date}</li>) }
SearchResults.propTypes = {
  name: PropTypes.array
}












// =============================================================================
// 
// =============================================================================
const rootElement = document.getElementById("root");
ReactDOM.render(<SearchResults />, rootElement);

// export default SearchResults