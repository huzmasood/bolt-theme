import React from 'react';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Navbar.css';

const dropdowns = [
    {
        title: "Landings",
        items: ['Marketing', 'Project Management', 'IT Services']
    },
    {
        title: "Pages",
        items: ['About Us', 'Blog', 'Careers']
    },
    {
        title: "Portfolios",
        items: ['Two Column Grid', 'Three Column Grid', 'Four Column Grid',]
    }
]

function Navigationbar () {
    return (
        <div style={{position: 'fixed', top: '0', width: '100%', backgroundColor: 'white', paddingBottom: '8px'}}>
            <Navbar expand="lg">
                <Container>
                    <div className='d-xl-flex d-lg-flex'>
                        <Navbar.Brand href="#home"><img alt='logo' src={ logo } /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {dropdowns.map((value, i) => {
                                    return (
                                        <NavDropdown key={ i } title={ value.title } id="basic-nav-dropdown" className='px-4'>
                                            {value.items.map((item, i) => {
                                                return <NavDropdown.Item key={ i } href="#">{ item }</NavDropdown.Item>
                                            })}
                                        </NavDropdown>
                                    )
                                })}
                                <Nav.Link href="#" className='ms-4'>Support</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className='d-xl-flex d-lg-flex'>
                        <a href='#login' className='btn'>Login</a>
                        <button className='button py-2 px-3' style={{borderRadius: '9999px'}}>Get Started For Free</button>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigationbar;