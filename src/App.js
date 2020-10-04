import React, { useState } from 'react';
import './App.css';
import Home from "./Home"
import Counter from "./Counter"
import Timer from "./Timer"
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import NavigationBar from './NavigationBar';

function App() {
  return (
    
    <Box className="App">
      <Router>
        <header className="App-header">
          <NavigationBar/>
        </header>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/counter"><Counter/></Route>
        <Route exact path="/timer"><Timer /></Route>
      </Router>
    </Box>
    
  );

  
}

export default App;
