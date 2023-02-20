import React from 'react';
import {useState} from 'react';
import { Navbar, Container , Button , Modal  } from 'react-bootstrap';
import ReactStars from 'react-stars';
import { v4 as uuidv4 } from 'uuid';
import { stars, inputSearch, setInputSearch , setStars, filtredMovies }  from 'react';


const Navba = ({movies, setMovies, inputSearch, setInputSearch, stars, setStars  }) => {
const [ show, setShow ]= useState(false);
const handleClose =() => setShow(false);
const handleShow = () => setShow(true);



  const [ newMovie , setNewMovie]= useState( 
    { 
      id: uuidv4( ) ,
     img : "" ,
      discription :"" ,
      titel : "" ,
      rating : "1" ,

    }
  );
const handleChange = (e) =>{
setNewMovie( { ...newMovie ,  [e.target.name]:e.target.value});
};
const handleSave =() =>{
  setMovies([...movies, newMovie ])
  setShow(false);
};
const handleSearch =(e) => {
  setInputSearch(e.target.value)


}

const handleStars =(new_rating) =>{
setStars(new_rating)
}

  return (
   
    <div>
      <Navbar bg="dark" variant="drak">
        <Container>
          <Navbar.Brand href="#home">
            
            Movies App
          </Navbar.Brand>
        <input type = "text"  placeholder= "Enter movie titel" onChange={handleSearch}/>
        <ReactStars
           count={5}
  
             size={24}
            color2={'#ffd700'} half={ false} onChange={handleStars} value={stars}/>
             <Button variant="warning" onClick={handleShow}> 
             Add Movie
              </Button>
             </Container>
             </Navbar>
             
            { /* Model of Add Movie */ }
            
             <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Movie </Modal.Title>
             </Modal.Header>
            <Modal.Body>
            <label > Movie titel </label>
          <input type= "text" onChange ={handleChange}  name= "titel"  />
          <label >Movie image </label>
          <input type= "text" onChange ={handleChange}name= "img" />       
          <label >Movie  discription </label>
          <input type= "text"   onChange ={handleChange} name= "discription"  /> 
          <label >Movie rating</label>
          <input type= "text"   onChange ={handleChange}name= "rating"  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal> 
        

       
      
   
    
    </div>
  
  );
}
  
export default Navba; 

