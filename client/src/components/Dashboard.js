import React,{Fragment,useState,useEffect} from "react";

const Dashaboard= ({setAuth})=>{

     const [name,setName] = useState ("");

     async function getName(){
         try {
            const response = await fetch("'http://localhost:5000/dashboard",{

            method:"GET",
            headers:{token: localStorage.token}
            

            }) 

            const parseRes = await response.json();
            console.log(parseRes)
         } catch (err) {
             console.log(err.message)
         }
     }
        useEffect(()=>{

            getName();
        })
    return(
        <Fragment>
            <h1>Dashaboard</h1>
        </Fragment>

    )
};

export default Dashaboard;