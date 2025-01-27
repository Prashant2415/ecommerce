import React from 'react'
import logo from "../../images/PM.png";
import {Link} from "react-router-dom";
import "./Layout.css";
const Header = () => {
  return (
    <div className='header-container'>
      {/* <img className='logo' src={logo} alt="logo" /> */}
      <p className='logo'>PM</p>
      <div className="header-links">
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/shop">Shop</Link>
        <Link className='links' to="/about">About</Link>
        <Link className='links' to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
