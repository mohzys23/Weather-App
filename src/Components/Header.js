import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa-cloud } from '@fortawesome/free-solid-svg-icons';



const font = <FontAwesomeIcon icon={[ 'fas', 'fa-cloud'} />

 

function Header() {
    return(

<div>
{font}
</div>

    );
}

export default Header;