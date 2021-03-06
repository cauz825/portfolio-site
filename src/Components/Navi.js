import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navi() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Michael Causey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid">
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/about">About Michael</Nav.Link>
                <NavDropdown title='Project Demos' id='basic-nav-dropdown'>
                    <NavDropdown.Item href="/demo1">What's For Dinner</NavDropdown.Item>
                    <NavDropdown.Item href='/demo2'>Veni Vidi Vici</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Contact Michael" id="basic-nav-dropdown" className='ml-auto'>
                    <NavDropdown.Item href="mailto:michaelhcausey@gmail.com" target='_blank' rel='noopener no referrer'>Email</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.linkedin.com/in/michaelhcausey/" target='_blank' rel='noopener no referrer'>LinkedIn</NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/cauz825" target='_blank' rel='noopener no referrer'>GitHub</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi;