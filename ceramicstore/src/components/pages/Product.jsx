import React from 'react'
import { useLocation , Link} from 'react-router-dom'
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/addtocartSlicer';
import { toast, ToastContainer } from 'react-toastify';
const Product = () => {
    const value = useLocation();
    const productDetail = value.state;
    console.log(productDetail)
    const { id, productname, description, price, imageurl, category } = productDetail.product;
    window.scrollTo({top:0, behavior: "smooth"})

    const dispatch = useDispatch();
    const cartValue = useSelector((state)=> state.addtocartSlicer);
    console.log(cartValue)
    const handleAddToCart = (productDetail)=>{
        console.log(productDetail)
        dispatch(addToCart(productDetail.product))
        toast("Data added to the cart");
    }
    return (
        <div className='product-item-container'>
            <div className="breadcrumb-container">
                <Link className='breadcrumb' to="/">Home</Link>&nbsp;<span> / &nbsp;Item</span>
            </div>
            <div className="item-detail-container">
                <div className="item-image-container">
                    <img className='item-image' src={`src/images/${imageurl}.webp`} alt={productname} />
                </div>
                <div className="item-container"><div className="item-details-container">
                    <p className='item-name p-top'>{productname}</p>
                    <p className='item-price p-top'>${price}</p>
                    <p className='item-description p-top'>{description}</p>
                    <button className='add-to-cart' onClick={()=> {handleAddToCart(productDetail)}}>Add to Cart</button><br />
                    <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={true}
                    theme="dark"/>
                    <button className='buy-now'>Buy Now</button>
                </div>
                    <div className="policy-container">
                        <div className="product-info">
                            <p className='policy-heading'>Product Info</p>
                            <p className='policy-info'>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
                        </div>
                        <div className="return-refund-policy">
                            <p className='policy-heading'>Return & Refund Policy</p>
                            <p className='policy-info'>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
                        </div>
                        <div className="shipping-info">
                            <p className='policy-heading'>Shipping Info</p>
                            <p className='policy-info'>I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p>
                        </div>
                    </div></div>

            </div>
        </div>
    )
}

export default Product
