import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ gamesPerPage, totalGames, paginate }) => {

  // Calculating how many page-buttons should we render
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page_item' onClick={() => paginate(number)}>
                {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// =============================================================================
// 
// =============================================================================
Pagination.propTypes = {
    gamesPerPage: PropTypes.number,
    totalGames: PropTypes.number,
    paginate: PropTypes.func,
}

export default Pagination;