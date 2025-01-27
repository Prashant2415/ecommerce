import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "../../App.css"
import { Outlet } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='home-container'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomePage
