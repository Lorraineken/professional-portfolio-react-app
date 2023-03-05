import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function SkillUpdate({skill_id}){

    const [skillName,setSkillName] = useState("")
    const [category,setCategory] = useState("")
    const navigate = useNavigate()

    const skill_details = {
        'name':skillName,
        'category':category
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/skills/update/${skill_id}`,{
            method:'PUT',
            body:JSON.stringify(skill_details)
        })
        navigate('/home')
    }

    return (
        <form className="card mt-5"  id="add-details" onSubmit={(e)=>handleSubmit(e)}>
        <h4 className="card-header">Update Skill</h4>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="new-name" onChange={(e) =>setSkillName(e.target.value)}/>
        <label htmlFor="description">Category: </label>
        <input type="text" name="Update Skill"  onChange={(e) => setCategory(e.target.value)} />
        <input type="submit" value="Update Skill" />
       </form>
    )
}

export default SkillUpdate