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
              <Navbar.Brand href='#' ><Link to="/"><Navbar className="title"><img src={myportfolio} alt="nav_img"/> </Navbar></Link></Navbar.Brand>  
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" href="/" className="links"><h1>Home</h1></Nav.Link>
                        <Nav.Link as={Link} to="/resume" href="/resume" className="links"><h1>Resume</h1></Nav.Link>
                        <Nav.Link as={Link} to="/projects" href="/projects" className="links"><h1>Projects</h1></Nav.Link>
                        <Nav.Link as={Link} to="/contact" href="/" className="links"><h1>Contact</h1></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
