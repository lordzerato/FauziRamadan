import React from 'react'
import {
  Navbar
 } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function TheNav() {
  const history = useHistory()

  function handleClickBtn(route) {
    history.push(route)
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand  onClick={
           () => handleClickBtn("/")
           }>Github Repo App</Navbar.Brand>
    </Navbar>
    </>
  )
}