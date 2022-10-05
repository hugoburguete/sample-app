import React from 'react';
import './App.css';
import myVariable from './playground';
import Button from './Button/Button';

function App() {
  console.log(myVariable);

  return (
    <div className="App" aria-busy>
      <Button text="asd" onPressed={() => {}} />
    </div>
  );
}

export default App;
