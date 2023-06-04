import React from 'react'

export default function Home() {
  return (
    <header id='home' className="header">
      <div className='home-text'>
        <h1 className='title'>Hi, I'm <span>Joshua</span> Modar</h1>
        <h5 className='subprop'>A Full Stack Developer building both Frontend and Backend of Websites and Web Application that leads to the success of the overall product.</h5>
        <a href="#project"><button className='btn'>PROJECTS</button></a>
      </div>
      <div className='home-links'>
        <a href="mailto: gaczeal@gmail.com"><i className="fa-brands fa-square-google-plus"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100075714011468&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://github.com/Aczeal14" target="_blank"><i className="fa-brands fa-github"></i></a>
      </div>
    </header>
  )
}
