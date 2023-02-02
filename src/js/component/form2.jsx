import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"

export const Form2 = () => {

//   const{actions}=useContext(Context)
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[name, setName]=useState("")
const {store, actions}=useContext(Context)

function enviarDatos(e) {
    e.preventDefault()
    actions.login(email,password, name)
    setEmail("")
    setPassword("")
    setName("")
    
}
	return (
        <>
        {store.auth === true ? <Navigate to="/login"/>:
        <form  onSubmit={enviarDatos}>
            <div className="container text-center my-4">
    <label for="exampleInputEmail1" className="d-flex text-white ">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="container text-center my-4">
    <label for="exampleInputEmail1" className="d-flex text-white ">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="container text-center my-4">
    <label for="exampleInputPassword1" className="form-label text-white ">Password</label>
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