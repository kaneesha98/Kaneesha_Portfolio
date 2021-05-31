import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'
import VCP1 from '../assets/VCP1.png';

const VCP=()=>{
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
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Employee Database Management System using AWS Web Services</h3><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Abstract:</span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>Employee Management System is a distributed application, developed to maintain the
details of employees working in any organization. It maintains the information about the
personal details of their employees. This is a multiuser approachable project and aims to
integrate systems for Human Resource (HR), Finance management and Employee
management at one place. The application is actually a suite of applications developed using
Python. This software package has been developed using the powerful coding tools of
HTML/CSS at Front End and SQLITE3 at Back End. The framework used here is Flask.
AWS EC2 instance, namely Linux is used for running the application and storing the required
data using EBS volumes. All data, including HTML templates, static images, database and
the main Python app file are stored on the instance. This provides an extra level of security
as it only operates through a specific PRIVATE KEY file provided by AWS. Added to that,
data can be stored directly onto the AWS Cloud, instead of storing it locally.</p><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Objective and Scope:</span></h5><br/>
        
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>In this world of growing technologies everything has been computerized. With large number
of work opportunities, the Human workforce has increased. Thus, there is a need of a
system which can handle the data of such a large number of Employees in an organization.
This project simplifies the task of maintain records because of its user-friendly nature. UI
optimization is done by integrating various levels of organization such as HR, Finance and
Employee all together.</p>
        <br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Software Requirements: </span></h5><br/>
        <ul>
        <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>WinSCP client for Microsoft Windows for secure file transfer between the local
machine and the Amazon EC2 Linux instance.</li>
<li style={{"font-family": "'Montserrat', 'sans-serif'"}}>PuTTY which is used for remote shell access to the Linux system.</li>
<li style={{"font-family": "'Montserrat', 'sans-serif'"}}>OS: Windows 10</li>
<li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Developing Language: Python(3.7.3)</li>
<li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Database: Sqlite 3</li>
<li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Framework: Flask</li>
        </ul>
        <br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Data Flowchart:</span></h5><br/>
        <img src={VCP1} className="center" style={{"width":"550px","height":"550px"}}></img><br/>
        <Footer/>
    </div>)
}
export default VCP;