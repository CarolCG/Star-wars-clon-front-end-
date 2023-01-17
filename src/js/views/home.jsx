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
		fetch("https://www.swapi.tech/api/vehicles/")
.then(res => res.json())
.then(data => setVehicles(data.results))
.catch(err => console.error(err))
	}

	function obtenerPlanets(){
		fetch("https://www.swapi.tech/api/planets/")
.then(res => res.json())
.then(data => setPlanets(data.results))
.catch(err => console.error(err))
	}

	function obtenerCharacters(){
		fetch("https://www.swapi.tech/api/people/")
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
	<div className="row row-cols-4">
	{characters.map((item)=><Card nombre={item.name} id={item.uid} key={item}/>)}
	</div>
	</div>
	<div className="container">
		<h1 className="text-danger">Planets</h1>
		<div className="row row-cols-4">
	{planets.map((item)=><Card2 planeta={item.name} id={item.uid} key={item}/>)}
	</div>
	</div>
	<div className="container">
	<h1 className="text-danger">Vehicles</h1>
	<div className="row row-cols-4">
	{vehicles.map((item)=><Card3 vehiculo={item.name} id={item.uid} key={item}/>)}
	</div>
	</div>
	</div>
);}
