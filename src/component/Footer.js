import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import "../styles/Footer.css";
 
const Footer = () => {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <Instagram /> <Facebook />  <Twitter /> <LinkedIn /> 
    <p>&copy; 2023 deliciousburgerking.com</p>

    </div>
     
    </div>
  )
}

export default Footer
