import React from 'react'
import { Navbar, Nav, Container, FormControl } from 'react-bootstrap'
import { Rating } from '@material-ui/lab'
import { Link } from 'react-router-dom'

export const Filter = ({setSearchTitle, searchRating, setSearchRating}) => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    
    <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand>Movie App</Navbar.Brand>
    </Link>
    
  <Link to="/" style={{textDecoration:"none"}}><Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
  </Nav>
  </Link>
    
    
    <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=> setSearchTitle(e.target.value)}
      />
      <Rating name="simple-controlled"
          value={searchRating}
          onChange={(event, newValue) => {
            setSearchRating(newValue)} } />
    </Container>
  </Navbar>
        </div>
    )
}
