import React from 'react'
import cart from '../assets/cart.svg'


const CartWidget = () => {
    return (
        <div>
            
            <img className='cart-img' src={cart} alt="cart-widget"  /> 
            0
            

        </div>
    )
}

export default CartWidget