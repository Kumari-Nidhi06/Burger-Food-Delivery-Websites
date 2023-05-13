import React from 'react';
import {Link} from "react-router-dom";
import BurgerPic from "../assets/Burger-img.avif";
import "../styles/Home.css";


const HomePage = () => {
  return (
    <>
    <div className='home'  style={{backgroundImage: `url(${BurgerPic})`}}>
    <div className='headerContainer'>
      <h1>Delicious Burger King</h1>
      <p>BURGER TO FIT ANY TASTE</p>
      <p className='homePara' style={{fontSize: "20px", width: "50%",lineHeight: "1.3", fontStyle: "oblique" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <Link to="/menu">
      <button>ORDER NOW</button>
      </Link>
    </div>
     
    </div>
    </>
  );
}

export default HomePage;
