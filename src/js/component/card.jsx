import React from "react";
import {Link} from "react-router-dom"

export const Card = (props) => {
  let id = parseInt(props.id)+1;
	return (
  <div className="col m-4">
    <div className="card h-100" style={{width: "15rem"}}>
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">Gender: {props.genero}</p>
        <p className="card-text">Hair Color: {props.pelo}</p>
        <p className="card-text">Eyes Color: {props.ojo}</p>
		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-primary" to={"/single/"+ id}>Learn More</Link>
		<Link type="button" className="btn btn-outline-warning "><i className="fa fa-heart outline-white"></i></Link>
		</div>
      </div>
    </div>
  </div>
	);
};

