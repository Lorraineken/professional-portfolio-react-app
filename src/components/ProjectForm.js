import React from "react";

function ProjectForm(){

    return (
         
         <form className="card mt-5"  id="add-details">
          <h4 className="card-header">Add New Project</h4>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="new-name" />
          <label htmlFor="description">Description </label>
          <input type="text" name="Instrument" id="new-project"  />
          <input type="submit" value="Add Project" />
         </form>
         
    )
}

export default ProjectForm