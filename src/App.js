import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Welcome from './components/Welcome';
// import TopLayoutBlog from './components/TopLayoutBlog';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Welcome />
    </div>
  );
}

export default App;
