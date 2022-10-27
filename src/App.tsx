import React, { useEffect, useState } from 'react';
import './App.css';

interface WineObject {
  id: number;
  winery: string;
  wine: string;
  rating: {
    average: string;
    reviews: string;
  };
  location: string;
  image: string;
}

function App() {
  const [results, setResults] = useState<WineObject[]>([]);

  useEffect(() => {
    const baseURL = 'https://api.sampleapis.com/wines/reds';
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => setResults(data));
  }, []);

  // output the listing into the page.
  return (
    <div className="App">
      <h1 className="text-center">My wines</h1>
      <ul className="grid">
        {results.map((wineObject) => (
          <li
            key={wineObject.id}
            style={{ width: '100%', position: 'relative' }}
          >
            <div className="image-container">
              <img src={wineObject.image} alt={wineObject.wine} />
            </div>
            <p>
              <b>{wineObject.wine}</b>
            </p>
            <p>Location: {wineObject.location}</p>
            <p>Rating: {wineObject.rating.average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
