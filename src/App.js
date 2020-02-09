import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// component
import Containers from "./containers";

function App() {
  return (
    <Router>
      <div className="App">
          <Containers/>
      </div>
    </Router>
  );
}

export default App;
