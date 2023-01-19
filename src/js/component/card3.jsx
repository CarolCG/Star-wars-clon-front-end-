import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";

export const Card3 = (props) => {
  let item=props.item
  const{actions}=useContext(Context)

  let id = parseInt(props.id)+1;
return (
  <div className="col m-4">
    <div className="card h-100" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id) + ".jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.vehiculo}</h5>
        <p className="card-text">Capacidad: {props.capcidad}</p>
        <p className="card-text">Consumable: {props.consumo}</p>
        <p className="card-text">Creado en: {props.creado}</p>
		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-primary" to={"/singleVehicle/"+ id}>Learn More</Link>
		<button type="button" className="btn btn-outline-light " onClick={()=>actions.agregarFavorito(item)}><i className={actions.changeColor(item)}></i></button>
		</div>
      </div>
    </div>
  </div>
);
};