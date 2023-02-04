import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
// import { Form2 } from "../component/form2.jsx";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    function signupUser(e){
        e.preventDefault()
        if (email != "" && name != "" && password != "") {
        actions.signup(email, name, password)
        setEmail("")
        setName("")
        setPassword("")
        } else {
            alert("Faltan datos por completar")
        }
    }

    // const navigate = useNavigate()
    // function handleSignup() {
    //     actions.signup()//cerrar la sesion
    //     navigate("/login")//usamos navigate para redireccionar
    
    // }

return(<><div className="container w-50 text-white mb-5">
<h1 className="text-center text-danger border-bottom border-danger">SIGN UP</h1>

{store.auth === true ? <Navigate to="/login"/>:
<form onSubmit={signupUser}>
<div className="form-group row">
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">Email address</label>
<input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" aria-describedby="emailHelp"/>

</div>

<div className="form-group row"> 
<div className="col-md-6 mb-3">
<label htmlFor="username" className="form-label">Name</label>
<input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} id="username" aria-describedby="emailHelp"/>

</div>

<div className="col-md-6 mb-3">
<label htmlFor="password" className="form-label">Password</label>
<input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>

</div>

</div>

<div className="d-grid gap-2 col-6 mx-auto">
<button type="submit" className="btn btn-lg btn-danger" >Submit</button>

</div>

</form>
}
</div>
</>
);

};

