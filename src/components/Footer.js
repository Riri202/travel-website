import React from 'react';
import {  FaInstagramSquare, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return <div className='footer-container'>
      <div className='footer-socials'>
          <FaInstagramSquare className='socials'/>
          <FaTwitter className='socials'/>
          <FaYoutube className='socials'/>
          <FaWhatsapp className='socials'/>
      </div>
      <div className='footer-text-container'>
         <p className='footer-text'><span>&copy;</span> 2022 TRVL.com.ng</p>
         
      </div>
  </div>;
}

export default Footer;
