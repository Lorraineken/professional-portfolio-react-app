
import React, {useState}from "react";

function Home({user_name,user_skills,projects}){

     const skills_project_id = []
   
    const display_skills =user_skills.map((item) => 
    {
        skills_project_id.push(item.project_id)
        return(
        <div>
        <p>{item.name} - {item.category}</p> 
        </div>
        )
    })
    
    const display_projects = projects.map((item) => {

       const project= skills_project_id.map((proj)=>{
            if (proj === item.id) {
                
                return (
                    <div>
                    <p>{item.name}</p> 
                    </div>
                )
            }
        })
       return project
    })
    
    return (
        <div>
        WELCOME
       <h2>{user_name}</h2>
        <div>
            <h3>Skills</h3>
            <div>
            {display_skills}
            </div>
             
            <h3>Projects</h3>
            <div>
            {display_projects}
            </div>
            
        </div>
        
        </div>
    )
}

export default Home