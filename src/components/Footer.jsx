import React from 'react'
import { Link } from 'react-router-dom'



function Footer(){
  return (
<div className='d-flex flex-column align-items-center justify-content-center mt-5 shadow' style={{width:'100%',height:'300px'}}>

<div className="footer d-flex justify-content-evenly w-100">
<div style={{width:'300px'}} className='website' >
  <h4 className='fw-bolder text-light'>
    <i className='fa-brands fa-docker'></i> Project Fair
  </h4>
  <h6>
    Designed and build with all the love in the world by the Luminar Jan 2024 Batch team with the help of our contributers.
  </h6>
  <h6>Code licensed MIT,docs CC BY 3.0</h6>
  <p>urrently v1.0.0</p>
</div>
<div className='links d-flex flex-column'>
  <h4>Links</h4>
  <Link to='/' style={{textDecoration:'none', color:'white'}}> Home</Link>
  <Link to='/login' style={{textDecoration:'none', color:'white'}}> Login</Link>
  <Link to='/register' style={{textDecoration:'none', color:'white'}}> Register</Link>
</div>
<div className='links d-flex flex-column'>
  <h4>Guides</h4>
  <Link to='/react' style={{textDecoration:'none', color:'white'}}> React</Link>
  <Link to='/bootstrap' style={{textDecoration:'none', color:'white'}}> React Bootstrap</Link>
  <Link to='/routing' style={{textDecoration:'none', color:'white'}}> Routing</Link>
</div>
<div className='contact'>
  <h4>Contact Us</h4>
  <div className='icons fs-5 d-flex justify-content-between mt-3'>
<input type="text"className='form-control' placeholder='Enter your Email Id' />
<button className='btn btn-warning ms-2'> <i className='fa-solid fa-arrow-right '></i> </button>
  </div>
  <div className='icons fs-5 d-flex justify-content-between mt-3'>
  <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}>
  <i className="fa-regular fa-envelope"></i>
  </Link>
  <Link to={'https://twitter.com/'} style={{ textDecoration: 'none', color: 'white' }}>
  <i className="fa-brands fa-square-twitter"></i>  </Link>
  <Link to={'https://linkedin.com/'} style={{ textDecoration: 'none', color: 'white' }}>
  <i className="fa-brands fa-linkedin"></i>  </Link>
  <Link to={'https://instagram.com/'} style={{ textDecoration: 'none', color: 'white' }}>
  <i className="fa-brands fa-instagram"></i>  </Link>
  <Link to={'https://github.com/'} style={{ textDecoration: 'none', color: 'white' }}>
  <i className="fa-brands fa-github"></i>  </Link>
  <Link to={'https://facebook.com/'} style={{ textDecoration: 'none', color: 'white' }}>
  <i className="fa-brands fa-facebook"></i>  </Link>
</div>
</div>
</div>
<p>Copyright @2024 Project Fair.Built with React.</p>

</div>

  )
}

export default Footer