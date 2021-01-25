import React from 'react';
import './navbar.component.css';
 

const SearchBar = ()=>{
    return  <article className="menu__searchbar animate">
            <input  type="search" placeholder="Search here"></input>
            
        </article>
}

const Navbar = ()=>{
    
    return <section className="navbar">

        <article className="menu__bar animate">
            <li className="selected">Home</li>
            <li>About US</li>
            <li>Services</li>
            <li>Cart</li>
        </article>


        <SearchBar />
    </section>
}


export default Navbar;