import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import profileimg from '../assets/uploadimage.webp'
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>Profile</h3>
        <button onClick={() => setOpen(!open)} className="btn text-warning fw-bolder">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="row align-items-center justify-content-center shadow rounded p-3" id='example-collapse-text'>
            <label className='text-center mb-2'>
              <input type="file" style={{ display: 'none' }} />
              <img height={'200px'} width={'200px'}
                className="rounded-circle" src={profileimg} alt="" />
            </label>
            <div className="mb-2">
              <input type="text" className="form-control" placeholder="GITHUB URL" />
            </div>
            <div className="mb-2">
              <input type="text" className="form-control" placeholder=" LINKEDIN URL" />
            </div>
            <div className="d-grid">
              <button className='btn btn-warning'>Update Profile</button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile