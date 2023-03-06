
import React, {useState}from "react";
import {Link, useNavigate} from "react-router-dom";

function Home({user_name,user_skills,projects,setSkillId,setProjectId}){


    const navigate = useNavigate();
    

    function deleteSkill(id){
        fetch(`http://localhost:9292/skills/destroy/${id}`,{
            method: 'DELETE'
           })
    }

   

    const display_skills =user_skills.map((item) => 
    {
        return(
        <div className="mt-3">
        <p>{`Name: ${item.name}`}
        </p> 
        <p>{`Category: ${item.category}`}</p>
        <button className="btn btn-dark" onClick={() =>{
            navigate('/updateskill')
          return  setSkillId(item.id)
        }}>Update</button>
         <button className="btn btn-danger ms-2" onClick={() => deleteSkill(item.id)}>x</button>
        </div>
        )
    })

    function deleteProject(id){
       fetch(`http://localhost:9292/projects/destroy/${id}`,{
        method: 'DELETE'
       })
    }


    const display_projects =projects.map((item) => 
    {
        
        return(
        <div className="mt-3">
        <p>{`Name: ${item.name}`}
        </p> 
        <p>{`Description: ${item.description}`}</p>
        <button className="btn btn-dark" onClick={() =>{
             navigate('/updateproject')
             return  setProjectId(item.id)
        }}>Update</button>
        <button className="btn btn-danger ms-2" onClick={() => deleteProject(item.id)}>x</button>
        
        </div>
        )
    })
    
     function addskill(){
        console.log("ADD SKILL")
        navigate('/newskill')
     }

     function addProject(){
        console.log("ADD PROJECT")
        navigate('/newproject')
     }

    
    return (
        <div>
        <h1 className="welcome font-effect-shadow-multiple">WELCOME</h1>
       <h2 className="user">{user_name}</h2>
       <div className="container text-center mt-3">
        <div className="row align-items-start">
            <div className="col">
            <h3 className="skills_header">Skills</h3>
            <button className="btn btn-light" onClick={() =>addskill()}>Add Skill</button>
            <div>
            {display_skills}
            </div>
            </div>
            <div className="col">
            <h3 className="projects_header">Projects</h3>
            <button className="btn btn-light " onClick={() =>addProject()}>Add Project</button>
            <div>
            {display_projects}
            </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Home