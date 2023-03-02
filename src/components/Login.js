import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login(){

    return(
        <form>
            <div className="container login-container bg-body-tertiary">
                <label htmlFor="uname"><b>Username</b></label>
                <input
                type="text" placeholder="Enter Username" name="uname" required/>
                <label htmlFor="psw"><b>Password</b></label>
                <input
                type="password" placeholder="Enter Password" name="psw" required/>
                
                <button type="submit">Login</button>
            </div>

        </form>
    )

}

export default Login;