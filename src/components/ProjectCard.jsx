import React, { useState } from 'react'
import { Card, Modal,Button } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className="shadow btn" >
        <Card.Img variant='top' height={'200px'} src='' />
        <Card.Body>
          <Card.Title>Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="" alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6><span className='fw-bolder'>Languauge Used:</span> <span className='text-danger'>React </span></h6>
              <p style={{ textAlign: 'justify' }}><span className='fw-bolder'>Project Overview :</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
          </div>
          <div className="float-start mt-2">
            <a href="https://github.com/Luminar-Technolab/Counter-Redux-Sep23-B2" target='_blank'
              className='btn btn-secondary'> <i className="fa-brands fa-github"></i> </a>
            <a href="https://pf-app-sep23-b2.vercel.app/" target='_blank' className='btn btn-secondary ms-2'>
              <i className="fa-solid fa-link"></i> </a>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default ProjectCard