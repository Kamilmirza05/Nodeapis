
import React,{Fragment, useState} from "react";
import {Link} from "react-router-dom";

const Register= ({setAuth})=>{

        const [inputs,setInputs] =useState({
            name:"",
            email:"",
            password:""
        });

        const {name,email,password} = inputs;

        const onChange = e=>{
            setInputs ({...inputs,[e.target.name]: e.target.value});
        }

        const onSubmitform =async e=>{
            e.preventDefault();
        
        try {
            const body = {name,email,password};
            const response = await fetch('http://localhost:5000/auth/register',{

                method:"post",
                headers:{"content-type":"application/json"}
                ,
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            localStorage.setItem =('token',parseRes.token);
            setAuth(true);


        } catch (err) {
           console.log(err.message);
        }

    }
    return(
        <Fragment>
        <h1 className="text-center my-5">Register</h1>
            <form onSubmit={onSubmitform}>
              <input type="email" name="email" placeholder="email"
               className="form-control my-2"
              value={email} 
              onChange={e=>onChange(e)}/>
              <input type="password" name="password" placeholder="password"
               className="form-control my-2"
              value={password}
               onChange={e=>onChange(e)} />
              <input type="name" name="name" placeholder="name" 
               className="form-control my-2" 
              value={name}
              onChange={e=>onChange(e)}/>
               <button className="btn btn-success btn-block">Submit</button>
            </form>
            <Link to ="/login">Login</Link>
        </Fragment>
    )
};

export default Register;