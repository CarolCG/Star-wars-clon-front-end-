import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";

export const Card2 = (props) => {
  let item=props.item
  const{actions}=useContext(Context)

  let id = parseInt(props.id)+1;
	return (
  <div className="col m-4 border border-danger p-2 border border-2">
    <div className="card h-100" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt="..."/>
      <div className="card-body ">
        <h5 className="card-title text-center bg-danger text-white"><strong>{props.planeta}</strong></h5>
        <p className="card-text text-center"><strong>Population:</strong> {props.poblacion}</p>
        <p className="card-text text-center"><strong>Terrain:</strong>{props.terreno}</p>
		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-danger" to={"/singlePlanet/"+ id}>Learn More</Link>
		<button type="button" className="btn btn-outline-light " onClick={()=>actions.agregarFavorito(item)}><i className={actions.changeColor(item)}></i></button>
		</div>
      </div>
    </div>
  </div>
	);
};

