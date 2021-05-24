import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header.js'
import Pagination from './components/Pagination';
import MatchesBoard from './components/MatchesBoard.js'
import TeamDetails from './components/TeamDetails.js'
import './index.css';


function App() {

  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false);
  // both States below used for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);

  useEffect(async () => {
    try {
      const response = await fetch("./testData/TESTING_NBA_games2.json");
      setLoading(true);      

      const jsonResponse = await response.json();
      let orderedGames = [...jsonResponse.api.games.reverse()];
      // we keep only the first 100 games
      setGames(orderedGames.slice(0, 100));
      setLoading(false);
    }
    catch(err) { console.log(err);}
  }, []);


  // Get current games
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGame = games.slice(indexOfFirstGame, indexOfLastGame);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Router>
        <Header />
        <Switch>
          {/* Have to pass teamId so that <TeamDetails/> can render logo */}
          <Route path="/teamDetails/:teamId" render={ ({ match, location }) => <TeamDetails match={match} location={location} /> } ></Route>

          <Route path="/404">
            <h1>404 Page Not Found!</h1>
          </Route>

          <Route exact path="/">
            <Pagination
              gamesPerPage={gamesPerPage}
              totalGames={games.length}
              paginate={paginate}
            />
            {/* Checking that games are loaded before rendering <MatchesBoard/> */}
            {games ? <MatchesBoard matchesData={currentGame} loading={loading} /> : <p>LOADING MATCHES</p>}
          </Route>
        </Switch>
    </Router>
  );
}


// =============================================================================
// 
// =============================================================================
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



