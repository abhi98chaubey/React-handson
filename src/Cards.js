import React from 'react';
import './Cards.css';

function Cards(props) {
  return (
    <div id='cards'>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
      <h5>{props.price}</h5>
      <button onClick={() => props.removeCard(props.id)}>remove</button>
    </div>
  );
}

export default Cards;
