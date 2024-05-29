import { Modal,Button } from "react-bootstrap"
import React, {useState} from 'react'
import imgplc from '../assets/addimg.png' 

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <button onClick={handleShow} className='btn btn-primary'> <i className='fa-solid fa-plus'></i> New Project </button>

      <Modal size="lg" centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label> <input type="file" style={{display:'none'}} />
            <img height={'200px'} className="img-fluid" src={imgplc} alt="" /></label>
          </div>
          <div className="col-lg-8">
          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Project Title" />
          </div>
          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Languages used" />
          </div>
          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Project GitHub link" />
          </div>
          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Project Website" />
          </div>

          </div>
         </div>
         <div>
          <input className="form-control" type="text" placeholder="Project OverView" />
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add