import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Shop.css"
import "./Product.css"
import { DummyData } from '../DummyData'
import { useDispatch, useSelector } from 'react-redux'
import productSlicer, { addProduct, searchProduct, sortProduct } from '../../redux/productSlicer'
import { addToCart } from '../../redux/addtocartSlicer'
const Shop = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.productSlicer.data);
    
    const handleView = (product)=>{
        navigate("/product", {state: {product}})
    }

    const search = useSelector((state)=> state.productSlicer.searchItem);
    const productData = products.filter((item)=> item.productname.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='shopping-container'>
            <div className="search-filter-container">
                <div className="search-container">
                    <input className='search-product' type="text" placeholder='Search product......' value={search} onChange={(e)=> dispatch(searchProduct(e.target.value))}/>
                </div>
                <div className="filter-container">
                    <select className='filter' onChange={(e)=>dispatch(sortProduct(e.target.value))}>
                        <option className='filter-option' value="Ascending">Ascending order</option>
                        <option className='filter-option' value="Descending">Descending order</option>
                    </select>
                </div>
            </div>
            <div className="shopping-product-container">
                    {productData.map((product, index) => {
                        return (
                            <div className="product-card shopping-card" key={index}>
                                <div className="product-image-container" onClick={()=>{handleView(product)}}>
                                    <img className='product-image' src={`src/images/${product.imageurl}.webp`} alt={product.imageurl} />
                                </div>
                                <div className="product-content">
                                    <p className='product-name'>{product.productname}</p>
                                    <p className='product-price'>{`$${product.price}`}</p>
                                    <button className='product-view' onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Shop
