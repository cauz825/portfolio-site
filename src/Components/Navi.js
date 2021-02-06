import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navi() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Michael Causey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Resume</Nav.Link>
                <NavDropdown title="Contact Michael" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi;