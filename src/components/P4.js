import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'
import P41 from '../assets/P41.png';
import P42 from '../assets/P42.png';
import P43 from '../assets/P43.png';
import P44 from '../assets/P44.png';
import P45 from '../assets/P45.png';

const P4=()=>{
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
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Instagram Search Engine Client </h3><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Introduction</span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>A CRUD application that interacts with database was created. In this, the web app was
made responsive using ANGULAR JS as well JQUERY libraries for search retrieval. Every
user who wants to perform some tasks such as searches, creation of account, deletion of
account, etc., needs to be authorized (Only authorized user can be able to perform a CRUD
operation on a document). Multiple search options were installed: Search using “#”
(hashtag), search using related pictures and search using Account name as keyword. The
pictures were listed with the profile of the person who uploaded the pictures (latest First). An
advance option was available to filter the pictures through account, dates of creation and
other hashtags.</p><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Implementation and Outputs:</span></h5><br/>
        <img src={P41} className="center" style={{"width":"350px","height":"350px"}}></img><br/>
        <img src={P42} className="center" style={{"width":"350px","height":"350px"}}></img><br/>
        <img src={P43} className="center" style={{"width":"550px","height":"350px"}}></img><br/>
        <img src={P44} className="center" style={{"width":"550px","height":"350px"}}></img><br/>
        <img src={P45} className="center" style={{"width":"550px","height":"350px"}}></img><br/>
        <br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Conclusion: </span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>With the help of this search client, search retrieval process becomes a lot faster as
compared to the traditional methods. As the same “#” (hashtag) can be used for multiple
pictures, users can filter this search by typing the profile’s account name. Moreover,
searching via related pictures on similar topics also enables users to filter user accounts and
hence make the process faster. With the help of various libraries of AJAX JQUERY,
responsive web pages were created which enabled users to view content without refreshing
the pages.</p>
        <br />
        <Footer/>
    </div>)
}
export default P4;