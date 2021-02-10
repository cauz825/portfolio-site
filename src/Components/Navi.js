import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navi() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Michael Causey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/about">About Michael</Nav.Link>
                <NavDropdown title="Contact Michael" id="basic-nav-dropdown">
                    <NavDropdown.Item href="mailto:michaelhcausey@gmail.com">Email</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.linkedin.com/in/michaelhcausey/">LinkedIn</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi;