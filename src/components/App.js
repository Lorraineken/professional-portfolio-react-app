import React,{useEffect, useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Home from './Home';

function App() {

  const skills_URL ='http://localhost:9292/skills'
  const projects_URL = 'http://localhost:9292/projects'

   const [user_name,setUser] = useState("")
   const [user_id,setId] = useState(0)
   const [user_skills,setSkills] = useState()
   const [projects,setProjects] = useState()

  

   useEffect(()=>{
    fetch(skills_URL)
    .then(response => response.json())
    .then(data => {
     const skills= data.filter((item) => 
        item.user_id === user_id
      )
      setSkills(() => skills)
      
    })
   },[])

   useEffect(()=>{
    fetch(projects_URL)
    .then(response => response.json())
    .then(data => {
       setProjects(() => data)
    })
   },[])
  
   
  return (
    <div className="App">
      <Routes>
        <Route
         path ="/"
         element={<Login setUser={setUser} setId={setId}/>}
        />
        <Route
        path ="/home"
        element ={<Home user_name={user_name} user_skills={user_skills}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
