import React from 'react'
import { Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router, NavLink,
 } from 'react-router-dom'

export default function TheNav() {

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="myNavBrand">Github Repo App</Navbar.Brand>
      <Router>
        <NavLink to="/home"
         className="myNavLink"
        >Home</NavLink>
        <NavLink to="/about"
         className="myNavLink"
        >About</NavLink>
      </Router>
    </Navbar>
    </>
  )
}