import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [characters, setCharacters]=useState([])
	const [planet, setPlanet]=useState([])
	const [vehicle, setVehicle]=useState([])


	
	
	function obtenerInformationDeCharacter(){
		fetch("https://swapi.dev/api/people/"+params.theid)
		.then(res => res.json())
		.then(data => setCharacters(data))
		.catch(err => console.error(err))
	}
	function obtenerInformationDePlanet(){
		fetch("https://swapi.dev/api/planets/"+params.theid)
        .then(res => res.json())
        .then(data => setPlanet(data))
        .catch(err => console.error(err))
	}
	function obtenerInformationDeVehicle(){
		fetch("https://swapi.dev/api/vehicles/"+params.theid)
		.then(res => res.json())
		.then(data => setVehicle(data))
		.catch(err => console.error(err))
	}

	useEffect(()=>{
		obtenerInformationDeCharacter();
	},[])
	useEffect(()=>{
		obtenerInformationDePlanet();
	},[])

	useEffect(()=>{
		obtenerInformationDeVehicle();
	},[])
	let id=params.theid;
	return (
		<>
		<div className="container">
		<div className="jumbotron w 75 mx-auto d-flex">
			<img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="mb-4" alt="Luke"style={{height:"300px", width:"300px"}}/>
			<div className="col mb-4">
			<h5 className="display-4 text-end me-5 ms-4 mt-3">{characters.name}</h5>
			<p className="text-center p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quisquam illo rerum ullam quos quo magnam, ut saepe sit sapiente totam consequuntur facilis inventore sequi dolorem laboriosam reprehenderit corporis voluptate.</p>
			</div>
			<hr className="my-4 bg-danger" style={{height:"2px"}} />
</div>
<hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{characters.name}</p></div>
						<div className="col"><h5>Birth Year</h5> <p className="fw-normal">{characters.birth_year}</p></div>
						<div className="col"><h5>Gender</h5> <p className="fw-normal">{characters.gender}</p></div>
						<div className="col"><h5>Height</h5><p className="fw-normal">{characters.height}</p></div>
						<div className="col"><h5>Skin Color</h5> <p className="fw-normal">{characters.skin_color}</p></div>
						<div className="col"><h5>Eye color</h5> <p className="fw-normal">{characters.eye_color}</p></div>
					</div>
			</div>
		{/* <div className="jumbotron w 75 mx-auto bg-secondary d-flex">
		<img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt="..."/>
		<h1 className="display-4 text-end me-5 ms-4 mt-3">{planet.name}</h1>
	</div>
	<div className="jumbotron w 75 mx-auto bg-secondary d-flex">
	<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id) + ".jpg"} className="card-img-top" alt="..."/>
	<h1 className="display-4 text-end me-5 ms-4 mt-3">{vehicle.name}</h1>
</div> */}
</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
