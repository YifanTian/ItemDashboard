import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background/background.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Item Board </h1>
        <p> xxxxxxx </p>
        <Link to="/menu">
          <button> Enter Website </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
