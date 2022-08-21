import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {



    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navBar'>
            <Container className='navBarContainer'>
                < div className='logoBrand'>
                    <Link to="/">
                        <Logo />
                        <Navbar.Brand href="#home">Oracle Sport</Navbar.Brand>
                    </Link>

                </ div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/category/hombres' className={'nav-link'}>Hombres</NavLink>
                        <NavLink to='/category/mujeres' className={'nav-link'}>Mujeres</NavLink>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar