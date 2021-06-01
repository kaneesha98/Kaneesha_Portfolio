import React from 'react';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'
import Footer from './Footer';
import SiliconValley from '../assets/42 Silicon Valley.png';
import GEP from '../assets/GEP.png';
import VC from '../assets/Virtusa Corporation.png';
import SVNIT from '../assets/svnit.png';
import SJSU from '../assets/SJSU.jpg';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Publication1 from '../assets/Publication1.pdf';
import Publication2 from '../assets/Publication2.pdf';
const Home=()=>{
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
        <section id="Education">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Education</h3>
        <br />
        <div class="row">
        
        <div class="col-md-6">
        <Card style={{ width: '18rem', "margin":"0 auto" }}>
        <Card.Img variant="top" src={SJSU} style={{"width":"225px","height":"100px"}} className="center"/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>San Jose State University</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br/>Masters in Computer Science<br/><br/></span>
            </Card.Text>
            {/* <Button variant="primary"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button> */}
        </Card.Body>
        </Card>
        </div>
        <div class="col-md-6" >
        
        <Card style={{ width: '18rem', "margin":"0 auto" }}>
        <Card.Img variant="top" src={SVNIT} style={{"width":"100px","height":"100px"}} className="center"/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>National Institute of Technology, Surat</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Bachelors Of Technology in Computer Engineering</span>
            </Card.Text>
            {/* <Button variant="primary"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button> */}
        </Card.Body>
        </Card>
        </div></div>
        
        
        </section>
        <hr></hr>
        <section id="Skills">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Skills</h3>
        <br />
        <div className="center">
        <h6><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Languages  </span></h6><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   C , C++ , PHP , Phython</p><br />
        <h6><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>FrontEnd  </span></h6><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   HTML , CSS , Bootstrap , Angular</p><br />
        <h6><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Database  </span></h6><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   SQL</p><br />
        <h6><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Version Control  </span></h6><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   Git</p><br />
        <h6><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Others  </span></h6><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   Ajax , Linux , Flask , VB testing , QC testing AWS Web Services</p><br />
        </div>
        </section>
        <hr></hr>
        <section id="WorkExperience">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Work Experience</h3>
        <br />
        <div class="row">
        <div class="col-md-4" >
        
        <Card style={{ width: '18rem', "margin":"0 auto" }}>
        <Card.Img variant="top" src={GEP} style={{"width":"200px","height":"100px"}} className="center"/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>GEP Worldwide, India</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Software Engineer Intern</span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio/GEP"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        <div class="col-md-4" >
        
        <Card style={{ width: '18rem', "margin":"0 auto" }}>
        <Card.Img variant="top" src={VC} style={{"width":"200px","height":"100px"}} className="center"/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Virtusa Corporation</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Volunteer - Trainee</span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio_VC"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        <div class="col-md-4">
        
        <Card style={{ width: '18rem', "margin":"0 auto" }}>
        <Card.Img variant="top" src={SiliconValley} style={{"width":"100px","height":"100px"}} className="center"/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>42 Silicon Valley</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Student Volunteer</span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio_SV"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        </section>
        <hr></hr>
        <section id="Projects">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Projects</h3>
        <br />
        <div class="row">
        <div class="col-md-3" >
        
        <Card style={{ width: '12rem', "margin":"0 auto" }}>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Centralized Collection and Real-Time Updation of COVID-19 Data Across India </span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}></span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio_Project1"><span style={{"font-family": "'Pattaya', 'sans-serif'"}} >More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        <div class="col-md-3" >
        
        <Card style={{ width: '12rem', "margin":"0 auto" }}>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Library Management System</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br /><br /><br /></span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio_Project2"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        <div class="col-md-3" >
        
        <Card style={{ width: '12rem', "margin":"0 auto" }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Online Auction System</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br /><br /><br /><br /></span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio_Project3"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        <div class="col-md-3" >
        
        <Card style={{ width: '12rem', "margin":"0 auto" }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Instagram Search Engine Client</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br /><br /><br /><br /></span>
            </Card.Text>
            <Button variant="primary" href="/Kaneesha_Portfolio_Project4"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        </section>
        <hr></hr>
        <section id="Publication">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Publications</h3>
        <br />
        <div class="row">
        
        <div class="col-md-6" >
        <div >
        <Card style={{ width: '18rem', "margin":"0 auto" }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>PPSE: Privacy Preservation and Security Efficient AKA Protocol for 5G Communication Networks</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>2020 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)</span>
            </Card.Text>
            <div style={{"display":"inline-block"}}>
            <Button variant="primary" style={{"marginInline":"35px"}} href={Publication1} download><span style={{"font-family": "'Pattaya', 'sans-serif'"}} >Download</span></Button>
            
            <Button variant="primary" href="https://ieeexplore.ieee.org/abstract/document/9342780"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Link</span></Button>
            </div>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-6" >
        <div >
        <Card style={{ width: '18rem' , "margin":"0 auto"}}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Detection of Bot Accounts on Social Media Considering Its Imbalanced Nature (Chapter 9)</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>IGI Global, 2021 <br /><br /><br /><br /><br /></span>
            </Card.Text>
            <div style={{"display":"inline-block"}}>
            <Button variant="primary" style={{"marginInline":"35px"}} href={Publication2} download><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Download</span></Button>
            
            <Button variant="primary" href="https://www.igi-global.com/submission/book-project-chapters/?projectid=03dcf765-2e75-4bf4-9089-305370caa331"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Link</span></Button>
            </div>
        </Card.Body>
        </Card>
        </div></div>
        </div>
        <br />
        </section>
        <hr></hr>
        <section id="Achievement">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Achievements</h3>
        <br />

    <Timeline align="alternate">
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Won Hamdan Bin Rashid Al Maktoum Award for the Distinguished Academic Performance in 2014. Hamdan Award is a national level award in the UAE awarded by Sheikh Hamdan Bin Rashid Al Maktoum, Deputy Ruler of Dubai, and UAE Minister of Finance</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Received the “Competent Communicator” certificate from Toastmaster’s Club in 2017. Represented the club on a district level </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Winner of Youth Leadership Program organized by Toastmasters Club in 2011</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Finalist of the prestigious YES Award in 2013, for exhibiting excellent all-round performance (Academics and Extra-Curricular)</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Awarded Dunia Young Leaders Performance Achievement Certificate in 2015. This certificate is awarded to the scholars who not only excel in academics, but also for their character, commitment, and potential for leadership </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Winner of Excellence Certificate in Academics awarded by the UAE Ministry of Education for performing exceptionally well in academics in 2013 </span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>School prefect for 5 years from 2012-2017 </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Won several accolades in art competitions </span> </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    
        </section>
        <hr></hr>
        <section id="Courses">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Courses</h3>
        <br />

    <Timeline align="alternate">
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Networking in Google Cloud: Defining and Implementing Networks (COURSERA) - 8 weeks</span>: The certification consisted of 3 separate courses with detailed knowledge and insight of the cloud concepts pertaining to Google, namely HTTP(s) load balancing, VPC network interlaying rules, creating different firewall protocols and VM instances, SSH terminal for the execution of different rules between different networks, and guidelines for using Cloud console </span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Blockchain: Foundations and Use Cases (COURSERA)– 5 Weeks</span>: Blockchain concept and applications of this concept in the digital world and an insight of Ethereum blockchain and BitCoin  </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Fundamentals of Cloud Computing (UDEMY) - 4 weeks</span>: Basics of the Cloud computing environment; factors that led to its development and segments of Cloud computing that include SaaS, IaaS, PaaS, and cloud security</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Machine Learning (COURSERA) – 6 Weeks</span>: ML techniques such as Regression, Clustering and Classification. Basic understanding and usage of Scikit learn, Matplot, Pandas, Numpy and Scipy libraries</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>C++ Course (Nadia Academy, United Arab Emirates) – 3 Weeks</span>: C++ programming mainly focused to the areas of strings, math functions, vectors, arrays and other complex data structures, trees and graphs</span></TimelineContent>
      </TimelineItem>
      
    </Timeline>
        </section>
        <hr></hr>
        <Footer />
    </div>);
}
export default Home;