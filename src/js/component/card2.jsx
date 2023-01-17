import React from "react";
import {Link} from "react-router-dom"

export const Card2 = (props) => {
  let id = parseInt(props.id)+1;
	return (
  <div className="col m-4">
    <div className="card h-100" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.planeta}</h5>
        <p className="card-text">Population: {props.poblacion}</p>
        <p className="card-text">Terrain: {props.terreno}</p>
		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-primary" to={"/single/"+ id}>Learn More</Link>
		<Link type="button" className="btn btn-outline-warning "><i className="fa fa-heart outline-white"></i></Link>
		</div>
      </div>
    </div>
  </div>
	);
};

