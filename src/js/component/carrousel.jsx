import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";

export const Carrousel = () => {

  const{actions}=useContext(Context)

	return (<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A92131654C1E0B1A4C072A327E49FB30CA8BDED279852FB32CAD9B33B4AAAB1/scale?width=2880&aspectRatio=1.78&format=jpeg" className="center" style={{width: "800px", heigth:"800px"}} alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="https://t.ctcdn.com.br/3qjzc7VFtvXPZjUKNuIJjNwEcts=/512x288/smart/filters:format(webp)/i589515.png" className="center"  style={{width: "800px", heigth:"800px"}}alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://thumbs.web.sapo.io/?W=2100&H=0&delay_optim=1&epic=NTYw7Jr0joHC44+ELMuvsrCjXCJ22ZUZMO5+bVSlBmszchVhV1WuXyjHat2JreT6dFF4Gcx/glvAjS+y4CYfFrgIkbjR21fE/4n1XVWuNEAfv1g=" className="center"  style={{width: "800px", heigth:"800px"}}alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>);
};