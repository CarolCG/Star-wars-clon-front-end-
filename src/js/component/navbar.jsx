import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {

const{store, actions}=useContext(Context)
// let item=props.item
//   let id = parseInt(props.id)+1;
	return (
		<div className="bg-danger ">
		<div className="container ">
		<nav className="navbar navbar-danger bg-danger mb-3 ">
			<Link to="/">
			<img className="bg-black rounded-3" id="local-nav-logo-desktop" src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg" alt="Star Wars Logo" style={{width:"90px"}}/>
			</Link>
			{/* <Link to="/demo"> */}
			<div className="dropdown">
			<button className="btn btn-lg btn btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites <span className="rounded-1 p-1 ">{store.favorites.length}</span>
			</button>
			<ul className="dropdown-menu">
			{store.favorites.map((item, id)=><Link to={actions.obtenerCharacters2(item) + (item.url.match(/\d+/g))} className="dropdown-item float-start btnEliminar" key={id}>{item.name}{item.planeta}{item.vehiculo}<button type="button" className="btn border-0 float-end"  onClick={() => actions.eliminarFavorito(item)}><i className="fa fa-trash"></i></button></Link>)}
			</ul>
			</div>				
{/* </Link> */}
		</nav>
		</div>
		</div>
	);
};
