import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";

function SkillForm({user_id}){

    const addSkillURL='https://lorraine-sinatra-professional-portfolio.onrender.com/skills/create'

    const [skillName,setSkillName] = useState("")
    const [category,setCategory] = useState("")
    const navigate = useNavigate()

    const skill_details = {
        "name":skillName,
        "category":category,
        "user_id":user_id
    }
    
    

    function handleSubmit(e){
        e.preventDefault()
        fetch (addSkillURL, {
            method: 'POST',
            body:JSON.stringify(skill_details)
           })
           .then(response => response.json())
           .then(data => console.log(data))
        navigate('/home')

    }

    return (
        <form className="card container mt-5"  id="add-details" onSubmit={(e)=>handleSubmit(e)}>
        <h4 className="card-header">Add New Skill</h4>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="new-name" onChange={(e) =>setSkillName(e.target.value)}/>
        <label htmlFor="description">Category: </label>
        <input type="text" name="Add Skill" id="new-skill" onChange={(e) => setCategory(e.target.value)} />
        <input type="submit" value="Add Skill" />
       </form>
    )
}

export default SkillForm