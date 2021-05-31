import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'

const SV=()=>{
    return(<div className="container-fluid">
        <Header />
        <Navbar style={{"backgroundColor":"#B37BA4"}} expand="lg" sticky="top" >
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ "margin":"0 auto"}}>
        <Nav.Link href="/Kaneesha_Portfolio/"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Home</span></Nav.Link>
        <Nav.Link href="/Kaneesha_Portfolio/#Education"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Education</span></Nav.Link>
        <Nav.Link href="/Kaneesha_Portfolio/#Skills"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Skills</span></Nav.Link>
        <Nav.Link href="/Kaneesha_Portfolio/#WorkExperience"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Work Experience</span></Nav.Link>
        <Nav.Link href="/Kaneesha_Portfolio/#Projects"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Projects</span></Nav.Link>
        <Nav.Link href="/Kaneesha_Portfolio/#Publication"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Publications</span></Nav.Link>
        <Nav.Link href="/Kaneesha_Portfolio/#Achievement"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Achievements</span></Nav.Link>
        
        <Nav.Link href="/Kaneesha_Portfolio/#Courses"><span style={{"font-family": "'Pattaya', 'sans-serif'","fontSize":"20px"}}>Courses</span></Nav.Link>
        
        </Nav>
       
        </Navbar.Collapse>
        </Navbar>
        <hr></hr>
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'", "textAlign":"center"}}>42 SILICON VALLEY, SAN FRANCISCO BAY AREA , Details</h3><br />
        <br />
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>42 Silicon Valley is an innovative engineering college in the San Francisco Bay Area. “Code for Fun” is a nonprofit organization committed to exposing all students to computer science at an early age.  </p><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Volunteered by teaching basic concepts of loops and recursion in Python programming using SCRATCH software  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Preparation of computer programming boot camps; assembling and development of kits used in the boot camps </li>
            
        </ul>
        <hr></hr>
        <Footer/>
    </div>)
}
export default SV;