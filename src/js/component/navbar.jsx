import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

const{store, actions}=useContext(Context)



	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img className="bg-black " id="local-nav-logo-desktop" src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png" alt="Star Wars Logo" style={{width:"70px"}}/>
			</Link>
			{/* <Link to="/demo"> */}
			<div className="dropdown">
			<button className="btn btn-lg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites
			</button>
			<ul className="dropdown-menu">
			{store.favorites.map((item, id)=><li className="dropdown-item float-start btnEliminar" key={id}>{item.nombre}{item.planeta}{item.vehiculo}<button type="button" className="btn border-0 float-end"  onClick={() => actions.eliminarFavorito(item)}><i className="fa fa-trash"></i></button></li>)}
			</ul>
			</div>				
{/* </Link> */}
		</nav>
		</div>
	);
};
