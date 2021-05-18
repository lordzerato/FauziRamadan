import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/index.css'

export default function RepoCards(props) {
  return (
    <>
      <Card className="myCard">
        <Card.Body className="myCardBody">
          <Card.Title>{props.repo.name}</Card.Title>
          <Card.Text>{props.repo.created_at}</Card.Text>
          <Card.Text>{props.repo.language}</Card.Text>
          <Card.Text>{props.repo.size}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}