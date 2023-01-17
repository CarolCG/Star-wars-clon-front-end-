import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [planet, setPlanet]=useState([])
	
	function obtenerInformationDePlanet(){
		fetch("https://swapi.dev/api/planets/"+params.theid)
        .then(res => res.json())
        .then(data => setPlanet(data))
        .catch(err => console.error(err))
	}

	
	useEffect(()=>{
		obtenerInformationDePlanet();
	},[])

	let id=params.theid;
	return (
		<>
		<div className="container">
		<div className="jumbotron w 75 mx-auto d-flex">
        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="mb-4" alt="Luke"style={{height:"300px", width:"300px"}}/>
			<div className="col mb-4">
			<h5 className="display-4 text-end me-5 ms-4 mt-3">{planet.name}</h5>
			<p className="text-center p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quisquam illo rerum ullam quos quo magnam, ut saepe sit sapiente totam consequuntur facilis inventore sequi dolorem laboriosam reprehenderit corporis voluptate.</p>
			</div>
			<hr className="my-4 bg-danger" style={{height:"2px"}} />
</div>
<hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{planet.name}</p></div>
						<div className="col"><h5>Terrain</h5> <p className="fw-normal">{planet.terrain}</p></div>
						<div className="col"><h5>Population</h5><p className="fw-normal">{planet.population}</p></div>
					</div>
			</div>
</>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
