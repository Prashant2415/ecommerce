import React from 'react'
import homeImage from "../../images/home.webp"
import "./Pages.css"
import { DummyData } from '../DummyData'
const Home = () => {
  const products = DummyData;
  return (
    <div className='home-page-container'>
      <div className="carousel-container">
        <img className='carousel-image' src={homeImage} alt="home image" />
        <p className='carousel-text'>Cermaic Studio</p>
        <button className='shop-now'>Shop Now</button>
      </div>
      <div className="description">
        <h3 className='description-heading'>Out Collection</h3>
        <p className='description-para'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
      <div className="product-container">
        {products.map((product,index)=>{
          return(
            <div className="product-card" key={index}>
              <div className="product-image-container">
                <img className='product-image' src={`src/images/${product.imageurl}.webp`} alt={product.imageurl} />
              </div>
              <div className="product-content">
                <p className='product-name'>{product.productname}</p>
                <p className='product-price'>{`$${product.price}`}</p>
                <button className='product-view'>View</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
