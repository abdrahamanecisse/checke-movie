import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import ReactStars from 'react-stars';

const AddMovie = ({addMovie}) => {
     const [show, setShow] = useState(false);

     const [title, setTitle] = useState("")
     const [description, setDescription] = useState("")
     const [rate, setRate] = useState(0)
     const [posterUrl, setPosterUrl] = useState("")
     
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     
     const handleAdd = () => {
        addMovie({title,description,posterUrl,rate,})
        handleClose()

     }
  return (
    <div className="container mt-2">
      {" "}
      <Button variant="dark" onClick={handleShow}>
        <FaPlusCircle style={{ margin: "1px 6px" }} />
        Add movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaPlusCircle style={{ margin: "1px 6px" }} />
            Movie Details
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="The hangover"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster image URL</Form.Label>
              <Form.Control
                onChange={(e) => setPosterUrl(e.target.value)}
                type="text"
                placeholder="https://google.com/images/movie.png"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating (from 1 to 5)</Form.Label>
              <ReactStars
                onChange={(rate) => setRate(rate)}
                count={5}
                size={24}
                color2={"#ffd700"}
                half={false}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAdd()}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie