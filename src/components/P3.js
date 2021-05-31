import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'

const P3=()=>{
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
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Online Auction System </h3><br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Introduction</span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>This online auction web site is aimed at taking auction to the fingertips of aspiring bidders
there by opening the doors of the “Open Auction House” to a wider cross section of Art
Lovers and Antique Collectors. This site also acts as an open forum where buyers and
sellers can come together and exchange their products. The site makes sure that the sellers
get a fair deal and buyers get a genuine product.</p><br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>System Modules:</span></h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Home Page - The site opens doors to aspiring web users through the Home page. The
Home Page is designed in such way that the layout is as user friendly as possible. There
is a navigational menu at the top of the page which links to various inner pages. There is
a category drop down on the left side for easy manipulation. The center area is for
displaying latest products in the chorological order. </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Login/ User Registration - Those who wish to take part in bidding or sell products at the
site must register at the site as seller or buyer. Only authenticated users can take part in
selling or in bidding. The system automatically rejects un-authenticated users who try to
bid or sell at the site.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Register Products - This module is for presenting items for bidding. Only those who
have registered and authenticated as sellers can place their articles for bidding. The
Module collects information like Product Name, Product Details, Starting Bid amount,
Incremental value etc. The system automatically inputs the closing date.</li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Bidding Module - The module is for bidding on any selected item. The bidder must
authenticate before participating in bidding. The system checks whether the incremental
amount entered by the bidder is equal or more than the incremental minimum set during
the product registration time. The system places the record in the bid history against the
bidder account.  </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Web Admin - This link opens to the administration module which is open to web
administrator only. Here site administrator can add product categories and can edit
product information like closing date. </li>
        </ul>
        <br/>
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Technology used: </span></h5><br/>
        <p style={{"font-family": "'Montserrat', 'sans-serif'"}}>PHP, JQUERY, HTML, CSS/BOOTSTRAP, AJAX, MYSQL.</p>
        <br />
        <Footer/>
    </div>)
}
export default P3;