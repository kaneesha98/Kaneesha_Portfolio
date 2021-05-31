import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import GEP1 from "../assets/GEP1.png";
import GEP2 from "../assets/GEP2.png";
import GEP3 from "../assets/GEP3.png";
import GEP4 from "../assets/GEP3.png";
import {Nav,Navbar, Card, Button} from 'react-bootstrap'

const GEP=()=>{
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
        <div >
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'"}} className="center">Optimization of Supplier Management Utility</h3><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Task 1 - Error filtering via New Relic</span></h5><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Addition of Custom Attribute feature for effective management of error logs</h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>There are a plethora of errors accounted each second during the management of any functionality</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>A few examples include custom logged in errors by user, genuine errors, errors of different sectors clubbed together, etc.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>The task was to find a way to filter error logs according to the requirement of each functionality/sector. </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>The New Relic custom attribute feature provides addition of a specific column corresponding to a particular group of errors. </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Introducing this facility helps in the successful segregation of error logs. </li>
        </ul>
        <br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Approach & implementation</h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Gained an insight on the various features of New Relic Platform and the “Adding Custom Attribute” functionality was employed. </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Required changes were successfully pushed into the repository and implemented. </li>
            
        </ul>
        <img src={GEP1} className="center"></img>
        <br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Task 2: Implementing settings on UI</span></h5><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Facilitating ease of access to all Supplier settings </h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Earlier, most of the configuration settings could be switched ON/OFF via backend.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Hardly, 20-22 settings could be accessed from UI and thus TSO was a requirement.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Henceforth, task was to make all the supplier settings available and accessible to the users on the UI itself.  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Less cumbersome, and functionality was optimized to the fullest.  </li>
        </ul>
        <br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Flowchart for demonstrating implementation  </h5><br/>
        <img src={GEP2} className="center"></img>
        <br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Results / Outcomes   </h5><br/>
        <img src={GEP3} className="center"></img><br />
        <img src={GEP4} className="center"></img><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Task 3: Rule Custom Attribute </span></h5><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Selection and mapping of questions congruent to Rule Engine UI   </h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Rule Custom Attribute aids in facilitating the addition of attributes on the Rule Engine UI. </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>This can be brought to successful completion without backend intervention.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Provided the UI, the user can select questions from the available forms and map it to the corresponding documents.  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Multiple questions can be added with this UI, without the need of DBA team or the backend.   </li>
        </ul>
        <hr></hr>
        </div>
        <Footer/>
    </div>)
}
export default GEP;
