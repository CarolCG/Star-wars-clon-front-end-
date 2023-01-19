import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";

export const Card3 = (props) => {
  let item=props.item
  const{actions}=useContext(Context)

  let id = parseInt(props.id)+1;
return (
  <div className="col m-4 border border-danger p-2 border border-2">
    <div className="card h-100" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (props.url.match(/\d+/g)) + ".jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center bg-danger text-white"><strong>{props.vehiculo}</strong></h5>
        <p className="card-text text-center"><strong>Capacidad:</strong>{props.capcidad}</p>
        <p className="card-text text-center"><strong>Consumable: </strong>{props.consumo}</p>
        <p className="card-text text-center"><strong>Creado en:</strong> {props.creado}</p>
		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-danger" to={"/singleVehicle/"+ (item.url.match(/\d+/g))}>Learn More</Link>
		<button type="button" className="btn btn-outline-light " onClick={()=>actions.agregarFavorito(item)}><i className={actions.changeColor(item)}></i></button>
		</div>
      </div>
    </div>
  </div>
);
};