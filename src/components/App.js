import React,{useEffect, useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Home from './Home';

function App() {

   

  return (
    <div className="App">
      <Routes>
        <Route
         path ="/"
         element={<Login/>}
        />
        <Route
        path ="/home"
        element ={<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App;
