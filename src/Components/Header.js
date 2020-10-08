import React from 'react';
import './Header.css';
import img from '../Assets/logo.svg';



function Header() {

        //    const [search, setSearch] = React.useState("");

        //const onSearch = (event) => {
        //    setSearch(event.value);
        //              alert(`You sarched for, ${search}.`);
         //        event.preventDefault();
//     }

    return(

< div className = "header">
    <div className="header-logo">
       <img src={img} alt="" />
    </div>

<div className="search-bar">
<input type="search" name="search bar" placeholder="Search"  aria-label="search bar" />
</div>

</div>

    );
}

export default Header;