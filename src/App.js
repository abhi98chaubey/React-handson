import { useState } from 'react';

import Data from './Data';
import Tours from './Tours';
import CreateCard from './CreateCard';

function App() {
  const [tours, setTours] = useState(Data);

  function removeCard(id) {
    setTours(tours.filter(tour => tour.id !== id));
  }

  function storeAllData() {
    setTours(Data);
  }

  return (
    <div className="App">
      {tours.length === 0 ? (
        <button onClick={() => storeAllData()}>refresh</button>
      ) : (
        <Tours data={tours} removeCard={removeCard} />
      )}

      <CreateCard/>
    </div>
  );
}

export default App;
