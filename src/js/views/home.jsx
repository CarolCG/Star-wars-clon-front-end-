import React, {useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Card2 } from "../component/card2.jsx";
import { Card3 } from "../component/card3.jsx";

export const Home = () => {

	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] =useState([])

	function obtenerVehicles(){
		fetch("https://swapi.dev/api/vehicles/")
.then(res => res.json())
.then(data => setVehicles(data.results))
.catch(err => console.error(err))
	}

	function obtenerPlanets(){
		fetch("https://swapi.dev/api/planets/")
.then(res => res.json())
.then(data => setPlanets(data.results))
.catch(err => console.error(err))
	}

	function obtenerCharacters(){
		fetch("https://swapi.dev/api/people/")
		.then(res => res.json())
		.then(data => setCharacters(data.results))
		.catch(err => console.error(err))
	}

	useEffect(()=>{
		obtenerCharacters()
		obtenerPlanets()
		obtenerVehicles()
	},[])
	
	return(
	<div>
	<div className="container">
	<h1 className="text-danger">Characters</h1>
	<div className="d-flex scrollable">
	{characters.map((item, index)=><Card nombre={item.name} genero={item.gender} ojo={item.eye_color} pelo={item.hair_color} id={index} key={index}/>)}
	</div>
	</div>
	<div className="container">
		<h1 className="text-danger">Planets</h1>
		<div className="d-flex scrollable">
	{planets.map((item, index)=><Card2 planeta={item.name} terreno={item.terrain} poblacion={item.population} id={index} key={index}/>)}
	</div>

	</div>
	<div className="container">
	<h1 className="text-danger">Vehicles</h1>
	<div className="d-flex scrollable">
	{vehicles.map((item, index)=><Card3 vehiculo={item.name} creado={item.created} capacidad={item.cargo_capacity} consumo={item.consumables} id={index} key={index}/>)}
	</div>
	</div>
	</div>
);}
