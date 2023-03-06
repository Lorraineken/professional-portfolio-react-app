import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function ProjectUpdate({project_id}){

    const [projectName,setProjectName] = useState("")
    const [description,setDescription] = useState("")
    const navigate = useNavigate()

    const project_details = {
        'name':projectName,
        'description':description
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/projects/update/${project_id}`,{
            method:'PUT',
            body:JSON.stringify(project_details)
        })
        navigate('/home')
    }

    return (
        <form className="card container mt-5"  id="add-details" onSubmit={(e)=>handleSubmit(e)}>
        <h4 className="card-header">Update Project</h4>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="new-name" onChange={(e) =>setProjectName(e.target.value)}/>
        <label htmlFor="description">Description: </label>
        <input type="text" name="Update Project"  onChange={(e) => setDescription(e.target.value)} />
        <input type="submit" value="Update Project" />
       </form>
    )
}

export default ProjectUpdate