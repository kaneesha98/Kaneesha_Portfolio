import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'

const P2=()=>{
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
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Library Management System </h3><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Introduction</span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>The project was made as a part of the DBMS course project. The aim is to build a computerized system to maintain all the daily work of library. It has facilities of librarian login and member login through which the librarian can monitor the whole system. The librarian authorizes registration for new members and grants issue permissions to the existing members. New members should have a minimum balance of 500 while registering. The member can request a book from the various books available in the library and further can issue the book once the librarian approves of it. Each issued book has a due date assigned and the books must be returned before the due date. An ER model based on the above implementation was constructed for gaining deeper insight. </p><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Project aims and objectives:</span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>The project aims and objectives that will be achieved after completion of this project are discussed in this subchapter. The aims and objectives are as follows: </p><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Online book issues </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Request column for librarian for providing new books </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Student login page where student can find books issued by him/her and date of return.  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>A search column to search availability of books  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>A teacher login page where teacher can add any events being organized in the college. </li>
        </ul>
        <br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Software Requirements: </span></h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Operating system: - Windows 10 is used as the operating system as it is stable and supports more features and is more user friendly</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Database: - MYSQL is used as database as it easy to maintain and retrieve records by simple queries which are in English language which are easy to understand and easy to write.  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Development tools and Programming language: - HTML is used to write the whole code and develop webpages with CSS, JAVASCRIPT for styling work and PHP for sever side scripting.  </li>
        </ul>
        <br />
        <Footer/>
    </div>)
}
export default P2;