import React, { useState } from 'react'
// import Popup from 'reactjs-popup';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
} from '@material/react-dialog';
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove } from '../../redux/addtocartSlicer'
const Cart = () => {
    const dummy = {
        "id": 1,
        "productname": "CupOne",
        "description": "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care",
        "price": 25,
        "imageurl": "CupOneImage",
        "category": "Cup"
    }
    const cartData = useSelector((state) => state.addtocartSlicer.data);
    const dispatch = useDispatch();
    const quantityValue = useSelector((state) => state.addtocartSlicer.data);
    console.log(quantityValue)
    console.log(cartData)
    const totalValue = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(totalValue)

    const [isOpen, setIsOpen] = useState(false);
    const handleDialog = () => {
        setIsOpen(true);
    }

    return (
        <div className='cart-container'>
            <div className="cart-container-scroll">
                <div className="cart-summary-container">
                    {cartData.map((cart, index) => {
                        return (
                            <div className="cart" key={index}>
                                <img className='cart-image' src={`src/images/${cart.imageurl}.webp`} alt={cart.productname} />
                                <div className="cart-detail">
                                    <p className='cart-productname'>{cart.productname}</p>
                                    <p className='cart-price'>${cart.price}</p>
                                </div>
                                <div className="quantity-container">
                                    {/* <p className='quantity-heading heading-color'>Quantity</p> */}
                                    <div className="quantity-button">
                                        <button className='decrement' onClick={(e) => dispatch(decrement(cart.id))}>-</button>
                                        <span className='quantity'>{cart.quantity}</span>
                                        <button className='increment' onClick={(e) => dispatch(increment(cart.id))}>+</button>
                                    </div>
                                </div>
                                <div className="total-value">
                                    {/* <p className='heading heading-color'>Total</p> */}
                                    <p className='total'>${cart.price * cart.quantity}</p>
                                </div>
                                <button className='remove-product' onClick={() => dispatch(remove(cart.id))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className="summary">
                <p className='heading'>Order Summary</p>
                <div className="subtotal-container">
                    <p className='heading header-width'>Subtotal</p>
                    <p className='subtotal-value heading'>${totalValue}</p>
                </div>
                <div className="summary-total">
                    <p className='heading header-width'>Total</p>
                    <p className='subtotal-value heading'>${totalValue}</p>
                </div>
                {/* <Popup trigger={<button className='checkout'> Checkout</button>} position="right center">
                    <div>Thank You</div>
                </Popup>
                 */}
                <button className='checkout' onClick={handleDialog}>Checkout</button>
                {isOpen && (
                    <div className="dialog">
                        <Dialog open={isOpen}>
                            <DialogTitle>Thank You</DialogTitle>
                            <DialogContent>
                                Thank You
                            </DialogContent>
                            <DialogFooter>
                                <DialogButton action='dismiss' onClick={() => { setIsOpen(false) }}>Cancel</DialogButton>
                                {/* <DialogButton action='accept' isDefault>Accept</DialogButton> */}
                            </DialogFooter>
                        </Dialog>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Cart
