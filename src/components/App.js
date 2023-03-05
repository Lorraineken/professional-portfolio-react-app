import React,{useEffect, useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import '../App.css';
import Login from './Login';
import Home from './Home';
import ProjectForm from './ProjectForm';
import SkillForm from './SkillForm';
import SkillUpdate from './SkillUpdate';

function App() {

  const skills_URL ='http://localhost:9292/skills'
  const projects_URL = 'http://localhost:9292/projects'

   const [user_name,setUser] = useState("")
   const [user_id,setId] = useState(0)
   const [user_skills,setSkills] = useState([])
   const [projects,setProjects] = useState([])
   const [updateSkillId,setSkillId] = useState(0)

  

   useEffect(()=>{
    fetch(skills_URL)
    .then(response => response.json())
    .then(data => {
      const skills_array = []
      data.map((item) => {
        if (item.user_id === user_id){
          skills_array.push(item)
        }
      } )
      setSkills(skills_array) 
      
    })
   },[user_id])
  
   useEffect(()=>{
    fetch(projects_URL)
    .then(response => response.json())
    .then(data => {
      const projects_array = []
      data.map((item)=>{
        if(item.user_id === user_id){
          projects_array.push(item)
        }
      })
    setProjects(projects_array)
    })
   },[user_id])
  
   
  return (
    <div className="App">
      <Routes>
        <Route
         path ="/"
         element={<Login setUser={setUser} setId={setId}/>}
        />
        <Route
        path ="/home"
        element ={<Home user_name={user_name} user_skills={user_skills} projects={projects} setSkillId={setSkillId}/>}
        />
        <Route
         path = "/newproject"
         element ={<ProjectForm user_id={user_id}/>}
        />
        <Route 
        path = '/newskill'
        element ={<SkillForm user_id={user_id}/>}
        />
        <Route
          path = '/updateskill'
          element ={<SkillUpdate skill_id={updateSkillId}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
