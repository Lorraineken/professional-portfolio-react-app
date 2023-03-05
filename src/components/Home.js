
import React, {useState}from "react";

function Home({user_name,user_skills,projects}){

   
    const display_skills =user_skills.map((item) => 
    {
        return(
        <div>
        <p>{`Name: ${item.name}`}</p> 
        <p>{`Category: ${item.category}`}</p>
        
        </div>
        )
    })
    
    const display_projects =projects.map((item) => 
    {
        
        return(
        <div>
        <p>{`Name: ${item.name}`}</p> 
        <p>{`Description: ${item.description}`}</p>
        </div>
        )
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