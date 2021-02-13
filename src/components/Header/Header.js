import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className="text-white" href="#/auth-home">Home</Nav.Link>
    <Nav.Link className="text-white" href="#purchases">My Orders</Nav.Link>
    <Nav.Link className="text-white" href="#change-password">Change Password</Nav.Link>
    <Nav.Link className="text-white" href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className="text-white" href="#/">Home</Nav.Link>
    <Nav.Link className="text-white" href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link className="text-white" href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      MESH Store
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span style={{ color: 'white' }} className="navbar-text mr-2">Welcome, {user.email}</span>}
        {/* { alwaysOptions } */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
