import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameSearch from './components/NameSearch';
import IdSearch from './components/IdSearch';

function App() {
  return (
    <div className="container">
      <div className="row">
        <IdSearch />
        <NameSearch />
      </div>
      <div className="row">
        <h2>Reporting</h2>
        <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default App;
