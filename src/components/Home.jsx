import React from 'react'
import resume from "../assets/resume.pdf"

export default function Home() {
  return (
    <header id='home' className="header">
      <div className='home-text'>
        <h1 className='title'>Joshua Modar</h1> 
        <h3>Web Developer</h3> 
        <a href={resume} target='blank'><button className='resume'>Resume</button></a>
        <div className='home-icon'>
          <a href="mailto: gaczeal@gmail.com"><i className="fa-brands fa-square-google-plus"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100075714011468&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://github.com/Aczeal14" target="_blank"><i className="fa-brands fa-github"></i></a>
        </div>
        <hr />
        <h5 className='subprop'>I'm a Web Developer focusing in both Frontend and Backend of Websites and Web Application that aims for the success of the overall product.</h5>
      </div>
    </header>
  )
}
