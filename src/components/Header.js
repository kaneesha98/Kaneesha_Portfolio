import React from 'react';
import Profile from '../assets/Profile.jpg';
import './style.css';

const Header=()=>{
    return(<div>
    <br />
        <div className="row">
            <div className="col-md-4" style={{"padding":"0px"}}>
                <img src={Profile} alt="Kaneesha_Pic" style={{"width":"150px", "height":"150px", "borderRadius": "50%"}} className="center"></img>
                <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Kaneesha Gandhi</h3>
            </div>
            <div className="col-md-8" style={{"padding":"0px"}}>
                <h1 style={{"font-family": "'Pattaya', 'sans-serif'","padding":"0px"}}>Hello, Welcome to my Portfolio</h1>
                <br />
                <h6 style={{"font-family": "'Montserrat', 'sans-serif'", "marginRight":"50px","padding":"0px"}}>A passionate and ardent Computer Science student pursuing Masters at San Jose State University. Always driven by an enthusiasm to learn and hone my skills through optimism, determination and a sharp vision. Effective team player with exemplary public speaking skills and ability to think critically.</h6>
            </div>

        </div>
        <hr></hr>

    </div>);
}
export default Header;