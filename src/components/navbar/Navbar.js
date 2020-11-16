import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css' 
import myportfolio from './../../img/myportfolio2.png'


export default class MyNavbar extends Component {

    render() {
  
        return (
            <Navbar collapseOnSelect expand="lg" className=" bg-custom-2"  variant="dark">
              <Navbar.Brand href='#' ><Link to="/PORTFOLIO/"><Navbar className="title"><img src={myportfolio} alt="nav_img"/> </Navbar></Link></Navbar.Brand>  
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/PORTFOLIO/" className="links"><h1>Home</h1></Nav.Link>
                        <Nav.Link as={Link} to="/PORTFOLIO/resume" className="links"><h1>Resume</h1></Nav.Link>
                        <Nav.Link as={Link} to="/PORTFOLIO/projects"  className="links"><h1>Projects</h1></Nav.Link>
                        <Nav.Link as={Link} to="/PORTFOLIO/contact"  className="links"><h1>Contact</h1></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
