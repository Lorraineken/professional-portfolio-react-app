import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login(){

    return(
   <section class="vh-100">
       <div class="container py-5 h-100">
       <div class="row d-flex align-items-center justify-content-center h-100">
       <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>
          <div class="d-flex justify-content-around align-items-center mb-4">
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          </form>
        </div>
      </div>
      </div>
   </section>
    )

}

export default Login;