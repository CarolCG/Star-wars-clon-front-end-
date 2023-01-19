import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";

export const Card = (props) => {

  const{actions}=useContext(Context)

let item=props.item
  let id = parseInt(props.id)+1;
	return (
  <div className="col m-4 border border-danger p-2 border border-2">
    <div className="card h-100" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="card-img-top" alt="..."/>
      <div className="card-body rounded-3 ">
        <h5 className="card-title text-center bg-danger text-white"><strong>{props.nombre}</strong></h5>
        <p className="card-text text-center "><strong>Gender:</strong> {props.genero}</p>
        <p className="card-text text-center"><strong>Hair Color:</strong> {props.pelo}</p>
        <p className="card-text text-center"><strong>Eyes Color:</strong> {props.ojo}</p>
		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-danger" to={"/single/"+ id}>Learn More</Link>
		<button type="button" className="btn btn-outline-light " onClick={()=>actions.agregarFavorito(item)}><i className={actions.changeColor(item)}></i></button>
		</div>
      </div>
    </div>
  </div>
	);
};

