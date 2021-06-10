import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* eslint-disable no-unused-vars */
import Header from './components/Header.js';
import Pagination from './components/Pagination';
import MatchesBoard from './components/MatchesBoard.js';
import TeamDetails from './components/TeamDetails.js';
import './index.css';

function App() {
  const [games, setGames] = useState([]);
  // const [loading, setLoading] = useState(false);
  // both States below used for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);

  useEffect(async () => {
    try {
      // const response = await fetch('./testData/TESTING_NBA_games2.json');
      const response = await fetch(`../.netlify/functions/fetchNbaData?path=games/seasonYear/2020`);
      // setLoading(true);

      // If request failed, we do an early return!
      if (response.status !== 200) {
        alert("Couldn't fetch matches data from the NBA API.");
        throw new Error(response.statusText);
      }

      const jsonResponse = await response.json();
      let orderedGames = [...jsonResponse.api.games.reverse()];
      // we keep only the first 100 games
      setGames(orderedGames.slice(0, 100));
      // setLoading(false);

      // on load, set first page as active
      paginate(1);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Get current games
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    let pageItems = document.querySelectorAll('li.page_item');

    for (let page of pageItems) {
      page.classList.remove('active_page');
    }
    pageItems[pageNumber - 1].classList.add('active_page');
  };

  return (
    <Router>
      <Header />
      <Switch>
        {/* Have to pass teamId so that <TeamDetails/> can render logo */}
        <Route
          path='/teamDetails/:teamId'
          render={({ match, location }) => <TeamDetails match={match} location={location} />}
        ></Route>

        <Route exact path='/'>
          <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate} />
          {/* Checking that games are loaded before rendering <MatchesBoard/> */}
          {games ? <MatchesBoard matchesData={currentGames} /> : <p>LOADING MATCHES</p>}
        </Route>

        <Route path='*'>
          <h1>404 Page Not Found!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

// =============================================================================
//
// =============================================================================
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
