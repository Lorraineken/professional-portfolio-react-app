import React,{useEffect, useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Home from './Home';

function App() {

   const [user_name,setUser] = useState("")
   const [user_id,setId] = useState()

   console.log(user_name)
   console.log(user_id)
  return (
    <div className="App">
      <Routes>
        <Route
         path ="/"
         element={<Login setUser={setUser} setId={setId}/>}
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
