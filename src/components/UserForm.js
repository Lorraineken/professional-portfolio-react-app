import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function UserForm(){

    const createUserURL ='https://lorraine-sinatra-professional-portfolio.onrender.com/users/create'

    const [full_name,setName] =useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [education_level,setEducation] = useState('')

    const navigate = useNavigate()

    const user_details = {
        "full_name":full_name,
        "password":password,
        "email":email,
        "education_level":education_level
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch(createUserURL,{
            method:"POST",
            body:JSON.stringify(user_details)
        })

        navigate('/')
    }

    return (
        <form className="card mt-5"   onSubmit={(e)=>handleSubmit(e)}>
          <h4 className="card-header">New User</h4>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"  onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="education level">Education Level: </label>
          <input type="text" name="education_level"  onChange={(e) => setEducation(e.target.value)}/>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password"  onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="Create User" />
         </form>
    )
}

export default UserForm