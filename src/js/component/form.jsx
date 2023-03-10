import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"

export const Form = () => {

//   const{actions}=useContext(Context)
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const {store, actions}=useContext(Context)

function enviarDatos(e) {
    e.preventDefault()
    if (email != "" && password != "") {
        actions.login(email,password)
        } else {
            alert("Faltan datos por completar")
        }
    // actions.login(email,password)
    setEmail("")
    setPassword("")
}
	return (
        <>
        {store.auth === true ? <Navigate to="/"/>:
        <form  onSubmit={enviarDatos}>
    <div className="container text-center my-4">
    <label htmlFor="exampleInputEmail1" className="d-flex text-white ">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="container text-center my-4">
    <label htmlFor="exampleInputPassword1" className="form-label text-white ">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="container text-center my-4">
    <button type="submit" className="btn btn-lg btn btn btn-outline-light ">Submit</button>
    </div>
</form>
}
    
</>
	);
};


