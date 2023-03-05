import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ProjectForm({user_id}){

    const addProjectURL ='http://localhost:9292/projects/create'

    const [projName,setProjName] = useState("")
    const [description,setDescription] = useState("")
    const navigate = useNavigate();


    const project_details = {
        "name":projName,
        "description":description,
        "user_id":user_id
    }
    

    function handleSubmit(e){
        e.preventDefault()
        fetch (addProjectURL, {
            method: 'POST',
            body:JSON.stringify(project_details)
           })
           .then(response => response.json())
           .then(data => console.log(data))
        navigate('/home')
    }

    return (
         
         <form className="card mt-5"  id="add-details" onSubmit={(e)=>handleSubmit(e)}>
          <h4 className="card-header">Add New Project</h4>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="new-name" onChange={(e) => setProjName(e.target.value)}/>
          <label htmlFor="description">Description: </label>
          <input type="text" name="Add Project" id="new-project" onChange={(e) => setDescription(e.target.value)} />
          <input type="submit" value="Add Project" />
         </form>
         
    )
}

export default ProjectForm