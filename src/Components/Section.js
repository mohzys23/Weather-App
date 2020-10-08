import React from 'react';
import './Section.css';
import cloudy from '../Assets/cloudy.svg';





function Section(props) {

    const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

const changeUsername = (event) => {
    setUsername(event.target.value);
};

const changePassword = (event) => {
    setPassword(event.target.value);
};

const onLogin = (event) => {
    alert(`Hello, ${username}. \nYour Password is ${password}`);
    event.preventDefault();
};


    return(
<div className="homeSection">

<div className="aside-left">
<h1>Get accurate weather forecast here.</h1>
<img src={cloudy} alt="" />
<p>Weather forecase for the day is displayed 24/7 and is automatically refreshed.</p>

</div>

<div className="aside-right">

<form method="">
    <h4>Sign in</h4>
    <label>Username: <br /><input value={username} onChange={changeUsername} type="text" /></label>
<br />
<br />
<label>Password: <br /><input onChange={changePassword} value={password} type="password" /></label>

<br />
<p>Always remember me <input type="checkbox" className="form-check" /></p>
<button onClick={onLogin}>Login</button>

</form>
</div>


</div>

    );
}


export default Section;