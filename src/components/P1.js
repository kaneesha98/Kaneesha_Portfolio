import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'
import P11 from '../assets/P11.png';
import P12 from '../assets/P12.png';
import P13 from '../assets/P13.png';
import P14 from '../assets/P14.png';

const P1=()=>{
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
        <br />
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Centralized Collection and Real-Time Updation of COVID-19 Data Across India</h3><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Introduction</span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>This project’s main aim was to create a centralized hub for data collection of COVID-19
patients across India. This eased the process of accessing and updating data in real-time.
The number of “Active”, “Recovered”, “Deaths” and “Total” cases were displayed for each
state of India in a tabular form. Moreover, the commonly occurring symptoms and prevention
methods of the virus were also displayed. The use of AJAX and JQUERY for search queries
made it possible to display the details of any patient in the database with the use of
keywords. There was no need to refresh the page every time as the data was updated and
inserted in real time. Helpline service numbers in case of emergency were also presented.</p><br/>
<h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>UML Case Diagrams:</span></h5><br/>
<p style={{"font-family": "'Montserrat', 'sans-serif'"}}>For Covid-19 Data Hub, there are 2 main types of users who carry out 3 different types of
interactions:
<br/>1. ADMIN: - Can add patient records into the database and can update records on the
dashboard by noon daily. Also takes care of the monitoring of privacy and
misinterpretation of data. Can also search and view patient records on the dashboard.
<br/>2. RESEARCHER/VIEWER: - Can browse through the data hub and search for patient
records. Can also view the dashboard for monthly, weekly, and daily reports. Has access
to latest helpline services.</p><br/>
<h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>ACTORS DIAGRAM:</h5><br/>
<img src={P11} className="center" style={{"width":"350px","height":"350px"}}></img><br/>
<h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>USE CASE DIAGRAM:</h5><br/>
<img src={P12} className="center" style={{"width":"350px","height":"350px"}}></img><br/>
<h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>SEQUENCE DIAGRAM:</h5><br/>
<img src={P13} className="center" style={{"width":"350px","height":"350px"}}></img><br/>
<h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>STATE DIAGRAM:</h5><br/>
<img src={P14} className="center" style={{"width":"550px","height":"350px"}}></img><br/>
        <Footer/>
    </div>)
}
export default P1;