import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/global.css'; 

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-bubble">3</span>
        </div>
    );
};

export default CartWidget;