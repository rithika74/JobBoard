import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header >
                <Navbar
                    expand="lg"
                    variant="light"
                    className="shadow-sm fixed-top back "
                >
                    <Container className='bg'>
                        <Navbar.Brand href="#home" className='brand'>JOB Portal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none', outline: 'none' }}>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto link">
                                <Nav.Link as={Link} to='/'><li>Home</li></Nav.Link>
                                <Nav.Link as={Link} to='/signup'><li>Register</li></Nav.Link>
                                <Nav.Link as={Link} to='/login'><li>Login</li></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet/>

        </>
    )
}

export default Home