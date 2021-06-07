import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Link
  } from 'reactstrap';

  
  function navbar ({setReq}) {

    return(
        <div>
            <Navbar>
                <NavbarBrand >
                    <NavLink href="/">MOVIES.net</NavLink>
                </NavbarBrand>
                <Nav>
                    <NavLink href='/'>Movies</NavLink>
                    <NavLink href="/add" >Add Movie</NavLink>
                    <NavLink href="/search" >Search Movie</NavLink>
                </Nav>
            </Navbar>
        </div>
    )
  }

  export default navbar