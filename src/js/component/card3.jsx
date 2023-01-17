import React from "react";


export const Card3 = (props) => {
return (
  <div className="col">
    <div className="card h-100">
      <img src="https://static.wikia.nocookie.net/ptstarwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190525165732" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.vehiculo}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		<div className="d-flex justify-content-between">
		<button type="button" className="btn btn-outline-primary">Learn More</button>
		<button type="button" className="btn btn-outline-warning "><i class="fa fa-heart outline-white"></i></button>
		</div>
      </div>
    </div>
  </div>
);
};