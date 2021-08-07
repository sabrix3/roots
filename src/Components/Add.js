import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';


const Add = ({movies, setMovies}) => {
   
    const [addTitle, setAddTitle] = useState("");
    const [addDate, setAddDate] = useState(0);
    const [addImage, setAddImage] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [addType, setAddType] = useState("");
    const [addRating, setAddRating] = useState(0);
    const [show, setShow] = useState(false);

const handleShow = () => {
    setShow(!show);
}
const handleClose = () => setShow(false);

    return(
        <div>
            <Button className="btn btn-outline-dark" style={{justifyContent:"center", marginTop:"50px", marginBottom:"50px"}} variant="light" onClick={handleShow}>Add Movie</Button>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header style={{backgroundColor:"white"}}>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                
  <Modal.Body style={{backgroundColor:"white"}}>
      <div>
          <label style={{marginBottom:"10px"}} className="input">Title: </label>
          <input style={{marginLeft:"56px"}} type="text" name="name" onChange = {(event) =>
    setAddTitle(event.target.value)} />
      </div>
      <div>
          <label style={{marginBottom:"10px"}} className="input">Date: </label>
          <input style={{marginLeft:"53px"}} type="number" name="date" onChange = {(event) =>
    setAddDate(event.target.value)} />
      </div>
      <div>
          <label style={{marginBottom:"10px"}} className="input">Image: </label>
          <input style={{marginLeft:"42px"}} type="file" accept="image/png, image/jpeg" name="image" onChange = {(event) =>
    setAddImage(event.target.value)} />
      </div>
      <div>
          <label style={{marginBottom:"10px", verticalAlign:"top" }} className="input">Description: </label>
          <textarea style={{marginLeft:"6px", width:"40%"}} placeholder="Write film description." name="discription" onChange = {(event) =>
    setAddDescription(event.target.value)}></textarea>
      </div>
      <div>
          <label style={{marginBottom:"10px"}} className="input">Type: </label>
          <input style={{marginLeft:"53px"}} type="text" name="type" onChange ={(event) =>
    setAddType(event.target.value)} />
      </div>
      <div>
          <label min="1" max="5" className="input">Rating: </label>
          <input style={{marginLeft:"41px"}} type="number" name="rating" onChange = {(event) =>
    setAddRating(event.target.value)} />
      </div>
  </Modal.Body>
  
  <Modal.Footer style={{backgroundColor:"white"}}>


    <Button type="button" variant="btn btn-outline-dark" onClick={(e) =>{
                    e.preventDefault()
                    setMovies([...movies,
                    {
                        id: Math.random(),
                        name: addTitle,
                        date: addDate,
                        image: addImage,
                        description: addDescription, 
                        type: addType,
                        rating: addRating 
                    }
                    ]);
                    
                    handleShow ()

                } 
                    }
                   
                    >Add Movie</Button>
                    <Button type="button" variant="btn btn-outline-dark" onClick={handleClose}>
            Close
          </Button>
  </Modal.Footer>
            </Modal>


        </div>
    )
}

 

export default Add;