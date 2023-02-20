import React from 'react';
import ReactStars from 'react-stars';
import './MovieCard.css';
import { Card, Button}  from "react-bootstrap";
import {Link} from "react-router-dom";
const MovieCard = ({movie}) =>  {
  return (
    <div  className='movie'>
      
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= { movie.img} alt= { movie.titel}  width="450px " heigth="400px" />
      <Card.Body>
        <Card.Title>{movie.titel}</Card.Title>
        <Card.Text>
          { movie.discription}
        </Card.Text>
        </Card.Body>
        <ReactStars
           count={5 }
          size={24}
            color2={'#ffd700'}  value ={ movie.rating}    edit= { false}  />
        <Link to={`/movie/${movie.id}`} >
        <Button variant="warning">see more</Button>{' ' }
        </Link>
        </Card>
        
     </div> 
  );
} 

export default MovieCard;