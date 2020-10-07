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

<form>
    <h4>Sign in</h4>
    <label>Username</label>
<input type="text" />
<br />
<label>Password</label>
<input type="password" />
<br />
<label>Always remember me</label>
<input type="checkbox" />
<br />
<button >Login</button>

</form>
</div>


</div>

    );
}


export default Section;