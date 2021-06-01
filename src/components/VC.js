import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'

const VC=()=>{
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
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'", "textAlign":"center"}}>VIRTUSA CORP., SAN FRANCISCO, Details</h3><br />
        <br />
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>Virtusa Corporation is an American information technology services company with its headquarters in Southborough, Massachusetts, United States. </p><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Experienced an informative study tour and gained in depth knowledge of documentation of Google Cloud and AWS web services such as EBS volumes, S3 buckets, AWS Route53, Amazon EC2 instances, AWS Identity and Access Management </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Utilized the above AWS technologies in congruence with HTML/CSS, SQLITE3 and Flask framework to optimize the storage and security of "Employee management system" project.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Hands-on experience with Amazon Web Services and GOOGLE cloud under supervision from employees </li>
            
        </ul>
        <Button variant="primary" href="/Kaneesha_Portfolio_VC_Project"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information On Project</span></Button>
        <hr></hr>
        <Footer/>
    </div>)
}
export default VC;