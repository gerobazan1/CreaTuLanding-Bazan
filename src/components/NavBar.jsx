import React from 'react';
import CartWidget from './CartWidget';
import '../styles/global.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="brand">Lo de Lula</h1>
            <div className="categoriesContainer">
                <ul className="categories">
                    <li className="category-item">Artículos de limpieza</li>
                    <li className="category-item">Bebidas</li>
                    <li className="category-item">Fiambres</li>
                    <li className="category-item">Lácteos</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;