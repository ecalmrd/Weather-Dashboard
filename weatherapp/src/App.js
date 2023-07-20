import React from 'react';
import NavBar from './components/NavBar';
import Weather from './pages/WeatherApp';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  return (

    <Router>
      <>
      <NavBar />
      <Weather/>
      </>
    </Router>
    
    
  );
}


export default App;
