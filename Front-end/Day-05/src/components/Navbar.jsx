// import React from 'react'
import React, { useState,useEffect } from 'react';
import '../assets/css/Navbar.css';
import '../assets/css/color.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loginani from '../assets/Animations/Login-ani.json'; 
import  Lottie from  "lottie-react";

import { Link } from 'react-router-dom';



import { RiShoppingCartFill, RiArrowLeftLine, RiWhatsappLine, RiInstagramLine, RiPhoneLine, RiShoppingCartLine, RiMenuLine, RiHeart3Line, RiStarLine, RiFileListLine, RiEditBoxLine } from 'react-icons/ri';

export default function Navbar() {
    const [menuShown, setMenuShown] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);



  const toggleNavbarMenu = () => {
    setMenuShown(!menuShown);
    document.body.classList.toggle('no-scroll');
  };

  const closeNavbarMenu = () => {
    setMenuShown(false);
    document.body.classList.remove('no-scroll');
  };

  const handleFormFocus = () => {
    setFormActive(true);
  };

  const handleFormBlur = () => {
    setFormActive(false);
  };



  return (
    <div>
    <section class="topbar-section">
        <div class="container1">
            <div class="topbar-wrapper">
                <div class="topbar-translate">
                    
                <button type="button" class="topbar-translate-toggle">

                <Lottie
        animationData={Loginani}
        style={{ width: '70px', height: '70px' }} 
        
        />
        
        <h5>
            Rook'sKnigth  Chess Academy
        </h5>
        </button>
                    
                   
                </div>
                
                <div class="topbar-link">
                    <Link to='/'> Home</Link>
                    <a href="#">About us</a>
                    <Link to='/course'>Course</Link>                    
                  
                    <a href="#">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                       <Link to='/login'>
                    <button className="navbar-form-submit1"> LOGIN </button>
                       </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <nav>
      <div className="container1">
        <div className="navbar-wrapper">
          <a href="#" className="navbar-logo">
            
            <FontAwesomeIcon icon="fa-solid fa-chess"/> </a>
          <form action="" className="navbar-form">
            <div className="navbar-form-group">
              <button type="button" className="navbar-form-close" onClick={closeNavbarMenu}><RiArrowLeftLine /></button>
              <input type="search" className="navbar-form-input" onFocus={handleFormFocus} onBlur={handleFormBlur} placeholder="What do you looking for?"/>
            </div>
            <button type="submit" className="navbar-form-submit">Search</button>
          </form>
          <div className="navbar-link">
            <a href="#" className="navbar-link-sm"><RiWhatsappLine /></a>
            <a href="#" className="navbar-link-sm"><RiInstagramLine /></a>
            <a href="#" className="navbar-link-sm"><RiPhoneLine /></a>
            <div className="navbar-link-divider navbar-link-sm"></div>
            <a href="#" className="navbar-link-cart"><RiShoppingCartLine /><span>8</span></a>
            <a href="#" className="navbar-link-toggle" onClick={toggleNavbarMenu}><RiMenuLine /></a>
          </div>
        </div>
      </div>

      <div className={`navbar-menu${menuShown ? ' shown' : ''}`}>
        <div className="navbar-menu-header">
          <div className="navbar-menu-header-title">Menu</div>
          <button type="button" className="navbar-menu-header-close" onClick={closeNavbarMenu}>&times;</button>
        </div>
        <div className="navbar-menu-body">
          <div className="navbar-menu-buttons">
            <a href="#" className="btn btn-blue">Sign In</a>
            <a href="#" className="btn btn-outline-blue">Sign Up</a>
          </div>
          <div className="navbar-menu-link">
            <a href="#"><RiHeart3Line /> Wishlist</a>
            <a href="#"><RiStarLine /> Reviews</a>
            <a href="#"><RiFileListLine /> Transactions</a>
            <a href="#"><RiEditBoxLine /> Blog</a>
          </div>
        </div>
      </div>
    </nav>
      
    </div>
  )
}
