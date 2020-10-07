import React from 'react';
import './Header.css';
import img from '../Assets/logo.svg';



function Header() {
    return(

< div className = "header">
    <div className="header-logo">
       <img src={img} alt="" />
    </div>

<div className="search-bar">
<input type="search" name="search bar" placeholder="Search" />
</div>

</div>

    );
}

export default Header;