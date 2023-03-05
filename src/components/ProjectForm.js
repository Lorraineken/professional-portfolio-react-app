import React,{useState} from "react";

function ProjectForm(){

    const [projName,setProjName] = useState("")
    const [description,setDescription] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
         
         <form className="card mt-5"  id="add-details" onSubmit={(e)=>handleSubmit(e)}>
          <h4 className="card-header">Add New Project</h4>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="new-name" onChange={(e) => setProjName(e.target.value)}/>
          <label htmlFor="description">Description: </label>
          <input type="text" name="Instrument" id="new-project" onChange={(e) => setDescription(e.target.value)} />
          <input type="submit" value="Add Project" />
         </form>
         
    )
}

export default ProjectForm