import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
