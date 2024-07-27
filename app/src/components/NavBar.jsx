import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handleClick = () => {
        localStorage.clear();
        navigate('/');
    };

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
                                <Nav.Link as={Link} to='/home'><li>Home</li></Nav.Link>
                                <Nav.Link as={Link} to='/home/jobs'><li>Jobs</li></Nav.Link>
                                <Nav.Link><li onClick={handleClick}>Logout</li></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet />

        </>
    )
}

export default NavBar