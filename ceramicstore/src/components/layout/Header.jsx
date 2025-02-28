import React from 'react'
import logo from "../../images/PM.png";
import { Link } from "react-router-dom";
import "./Layout.css";
import { useSelector } from 'react-redux';
const Header = () => {
  const cartData = useSelector((state) => state.addtocartSlicer.data);
  const cartLength = cartData.length === 0 ? "": cartData.length;
  console.log(cartLength)
  return (
    <div className='header-container'>
      {/* <img className='logo' src={logo} alt="logo" /> */}
      <p className='logo'>PM</p>
      <div className="header-links">
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/shop">Shop</Link>
        <Link className='links' to="/about">About</Link>
        <Link className='links' to="/contact">Contact</Link>
        <Link className='links' to="/addtocart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg><sup>{cartLength}</sup></Link>
      </div>
    </div>
  )
}

export default Header
