import React from 'react';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap';

const Appbar=()=>{
    return(<div>
        <Navbar style={{"backgroundColor":"#B37BA4"}} expand="lg" sticky="top" >
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Home</span></Nav.Link>
        <Nav.Link href="#Education"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Education</span></Nav.Link>
        <Nav.Link href="/#Skills"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Skills</span></Nav.Link>
        <Nav.Link href="#WorkExperience"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Work Experience</span></Nav.Link>
        <Nav.Link href="/#Achievement"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Achievements</span></Nav.Link>
        <Nav.Link href="/#Projects"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Projects</span></Nav.Link>
        <Nav.Link href="/#Courses"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Courses</span></Nav.Link>
        <Nav.Link href="/#Publication"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Publications</span></Nav.Link>
        </Nav>
       
        </Navbar.Collapse>
        </Navbar>
        <hr></hr>
    </div>)
}
export default Appbar;