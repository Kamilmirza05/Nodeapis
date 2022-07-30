import React,{Fragment,useState} from "react";
import {Link} from "react-router-dom";

const Login= ({setAuth})=>{
    
    const [inputs,setInputs] =useState({
        
        email:"",
        password:""
    });

    const {email,password} = inputs;
    const onChange = e=>{
        setInputs ({...inputs,[e.target.name]: e.target.value});
    }
    
    const onSubmitform =async e=>{
        e.preventDefault();

        try {
            const body = {email,password};
            const response = await fetch("http://localhost:5000/auth/login",{

                method:"post",
                headers:{"content-type":"application/json"}
                ,
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            localStorage.setItem =('token',parseRes.token);
            setAuth(true);

        } catch (err) {
            console.log(err.message)

        }
    }

    return(
        <Fragment className="form1">
        <h1 className="text-center my-5">Login</h1>
             <form onSubmit={onSubmitform} >
                 <input type="email" name="email" placeholder="email" 
                 className="form-control my-3" value={email}
                 onChange={e=>onChange(e)}
                 />
                 <input type="password" name="password" placeholder="password"
                 className="form-control my-3" value={password}
                 onChange={e=>onChange(e)}
                 />
                 <button className="btn btn-success btn btn-block">Submit</button>
             </form>
             <Link to ="/register">Register</Link>
            
        </Fragment>
    )
};
export default Login;