
import React, {useState}from "react";
import {Link, useNavigate} from "react-router-dom";

function Home({user_name,user_skills,projects,setSkillId}){


    const navigate = useNavigate();
    

    function deleteSkill(id){
        fetch(`http://localhost:9292/skills/destroy/${id}`,{
            method: 'DELETE'
           })
    }

   

    const display_skills =user_skills.map((item) => 
    {
        return(
        <div>
        <p>{`Name: ${item.name}`}
        <button onClick={() =>{
            navigate('/updateskill')
          return  setSkillId(item.id)
        }}>Update</button>
         <button onClick={() => deleteSkill(item.id)}>x</button>
        </p> 
        <p>{`Category: ${item.category}`}</p>
        
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
        <div>
        <p>{`Name: ${item.name}`}
        <button>Update</button>
        <button onClick={() => deleteProject(item.id)}>x</button>
        </p> 
        <p>{`Description: ${item.description}`}</p>
        
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
        WELCOME
       <h2>{user_name}</h2>
        <div>
            <h3>Skills</h3>
            <button onClick={() =>addskill()}>Add Skill</button>
            <div>
            {display_skills}
            </div>
             
            <h3>Projects</h3>
            <button onClick={() =>addProject()}>Add Project</button>
            <div>
            {display_projects}
            </div>
            
        </div>
        
        </div>
    )
}

export default Home