import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Dynamic from './d-timer';

function App() {
  let time= 0
  return (
    <div className="App">
      <Dynamic time={time}/>
    </div>
  );
}

export default App;
