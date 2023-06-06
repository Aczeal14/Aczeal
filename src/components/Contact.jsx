import React from 'react'

export default function Contact() {
  return (
    <footer id="contact" className="bot">
      <div className='sub-container'>
        <h2 className='sub-title'>CONTACT</h2>
        <p className='text-expo'>
          Feel free to Contact me by clicking the links below and I will get back to you as soon as possible
        </p>
      </div>
      
      
      <div className='footer'>
        <div className='footer-text'>
          <h3 className='semi-title'>Joshua Modar</h3>
          <hr />
          <p>&copy; 2023, Created by: Aczeal</p>
        </div>
        <div className="icons">
          <h3 className='semi-title'>SOCIAL</h3>
          <hr />  
          <div className='icon-container'>
            <a href="mailto: gaczeal@gmail.com"><i className="fa-brands fa-square-google-plus"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100075714011468&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://github.com/Aczeal14" target="_blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      
    </footer>
  )
}
