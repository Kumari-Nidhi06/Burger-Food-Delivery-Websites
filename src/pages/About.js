import React from 'react';
import HalfBurger from "../assets/halfburger.webp";
import "../styles/About.css";

const About = () => {
    return (
        <div className='about'>
            <div
                className='aboutTop'
                style={{ backgroundImage: `url(${HalfBurger})` }}
            >
              
            </div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>Lorem Ipsum is simply dummy text of the printing  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.There are many variations of passages of Lorem Ipsum available.</p>
            </div>

        </div>
    )
}

export default About
