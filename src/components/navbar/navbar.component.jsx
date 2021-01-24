import React from 'react';
import './navbar.component.css';


const Navbar = ()=>{
    
    return <section className="navbar">

        <article className="menu__bar">
            <li className="selected">Home</li>
            <li>About US</li>
            <li>Services</li>
            <li>Cart</li>
        </article>

    </section>
}


export default Navbar;