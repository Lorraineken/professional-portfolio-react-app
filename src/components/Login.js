import React,{useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login({setUser,setId}){
    
   const login_URL ='http://localhost:9292/login'
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [isLoggedIn,setLogIn] = useState(false);
   const navigate = useNavigate();

   const login_details = {
    "email":email,
    "password":password
   }
   
   useEffect(()=>{
    fetch (login_URL, {
      method: 'POST',
      body:JSON.stringify(login_details)
     })
     .then(response => response.json())
     .then(data => {
       setUser(data.user_name)
       setId(data.user_id)
      if (data.success === true){
         navigate('/home')
      }
     })  
   },[isLoggedIn])

   
   function handleSubmit(e){
     e.preventDefault()
     setLogIn(()=>true)
   }
       
    return(
   <section className="vh-100">
       <div className="container py-5 h-100">
       <div className="row d-flex align-items-center justify-content-center h-100">
       <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="form-outline mb-4">
            <input type="email" value={email} id="form1-mail" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
            <label className="form-label" htmlFor="form1-mail">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" value={password} id="form1-pswd" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
            <label className="form-label" htmlFor="form1-pswd">Password</label>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
           <button className="btn btn-secondary btn-lg btn-block"onClick={()=> navigate('/newuser')}>Sign Up</button>
          </form>
        </div>
      </div>
      </div>
   </section>
    )

}

export default Login;