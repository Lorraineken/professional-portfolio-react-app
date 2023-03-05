import React from "react";

function SkillForm(){

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <form className="card mt-5"  id="add-details" onSubmit={(e)=>handleSubmit(e)}>
        <h4 className="card-header">Add New Skill</h4>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="new-name" />
        <label htmlFor="description">Category: </label>
        <input type="text" name="Add Skill" id="new-skill"  />
        <input type="submit" value="Add Skill" />
       </form>
    )
}

export default SkillForm