import React from "react";
import { Link } from 'react-router-dom';

function MenuItem({ image, name, price, keyname }) {
  console.log("keyname", keyname);
  return (
    <div className="menuItem">
      <Link to={`/items/${keyname}`}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      </Link>
    </div>
  );
}

export default MenuItem;
