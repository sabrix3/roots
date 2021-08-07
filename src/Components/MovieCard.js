import React from 'react'
import {Card} from 'react-bootstrap'
import {Rating} from '@material-ui/lab'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export const MovieCard = ({movie}) => {
    return (
        <div>
          <Link to={`/trailer/${movie.id}`} style={{textDecoration:"none", color:"black"}}>
    <Card style={{ width: '18rem', margin:"5px", boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.1)", borderRadius:"5px", height:"100%",  }}>
    <Card.Img style={{width: "400px", height: "410px", objectFit: "container", border:"solid"}} className="img-fluid" variant="top" src={movie.image} />
    <Card.Body style={{marginBottom:"5px", marginTop:"15px"}}>
    <Card.Title style={{}}>{movie.name}</Card.Title>
    <Card.Text style={{height:'40%', marginBottom:"-20px"}}>
      {movie.description}
    </Card.Text>
    <Card.Text>
      {movie.date}
    </Card.Text>
    <Card.Text>
      {movie.type}
    </Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly/>
    <Card.Text>
    <ReactPlayer style={{visibility:"hidden"}} className="player" width='100%' height='100%' config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }} controls url={movie.trailer} />
    </Card.Text>
    </Card.Body>
    </Card>
    </Link>
        </div>
    )
}
