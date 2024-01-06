import React from 'react';
import Cards from './Cards';
import './Tours.css';

function Tours({ data, removeCard }) {
  return (
    <div id='tour'>
      {data.map((tour) => (
        <Cards key={tour.id} title={tour.title} description={tour.description} price={tour.price} removeCard={() => removeCard(tour.id)} />
      ))}
    </div>
  );
}

export default Tours;
