import React, {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Card2 } from "../component/card2.jsx";
import { Card3 } from "../component/card3.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {

	const {store}= useContext(Context)

	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] =useState([])

// 	function obtenerVehicles(){
// 		fetch("https://swapi.dev/api/vehicles/")
// .then(res => res.json())
// .then(data => setVehicles(data.results))
// .catch(err => console.error(err))
// 	}

// 	function obtenerPlanets(){
// 		fetch("https://swapi.dev/api/planets/")
// .then(res => res.json())
// .then(data => setPlanets(data.results))
// .catch(err => console.error(err))
// 	}

	// function obtenerCharacters(){
	// 	fetch("https://swapi.dev/api/people/")
	// 	.then(res => res.json())
	// 	.then(data => setCharacters(data.results))
	// 	.catch(err => console.error(err))
	// }

	// useEffect(()=>{
	// 	obtenerCharacters()
	// 	// obtenerPlanets()
	// 	// obtenerVehicles()
	// },[])
	console.log(store.vehicles)
	return(
	<div>
	<div className="container">
	<h1 className="text-danger">Characters</h1>
	<div className="d-flex scrollable">
	{store.characters.map((item, index)=><Card item={item} nombre={item.name} genero={item.gender} ojo={item.eye_color} pelo={item.hair_color} id={index} key={index}/>)}
	</div>
	</div>
	<div className="container">
		<h1 className="text-danger">Planets</h1>
		<div className="d-flex scrollable">
	{store.planets.map((item, index)=><Card2 item={item} planeta={item.name} terreno={item.terrain} poblacion={item.population} id={index} key={index}/>)}
	</div>

	</div>
	<div className="container">
	<h1 className="text-danger">Vehicles</h1>
	<div className="d-flex scrollable">
	{store.vehicles.map((item, index)=><Card3 item={item} vehiculo={item.name} creado={item.created} capacidad={item.cargo_capacity} consumo={item.consumables} id={index} key={index}/>)}
	</div>
	</div>
	</div>
);}
