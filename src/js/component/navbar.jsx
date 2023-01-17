import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img className="bg-black " id="local-nav-logo-desktop" src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png" alt="Star Wars Logo" style={{width:"70px"}}/>
			</Link>
			<Link to="/demo">
				<div className="dropdown d-flex">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favourite
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Action</button>
    <button className="dropdown-item" type="button">Another action</button>
    <button className="dropdown-item" type="button">Something else here</button>
  </ul>
</div>				
</Link>
		</nav>
		</div>
	);
};
