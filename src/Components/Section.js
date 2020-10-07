import React from 'react';
import './Section.css';

function Section() {
    return(
<div className="homeSection">

<div className="aside-left">
<h1>Get accurate weather forecast here.</h1>
<p>Weather forecase for the day is displayed 24/7 and is automatically refreshed.</p>
</div>

<div className="aside-right">

<form method="">
    <h4>Sign in</h4>
    <label>Username: <br /><input type="text" /> </label>
<br />
<br />
<label>Password: <br /><input type="password" /></label>

<br />
<p>Always remember me <input type="checkbox" class="form-check"/></p>
<button >Login</button>

</form>
</div>


</div>

    );
}


export default Section;