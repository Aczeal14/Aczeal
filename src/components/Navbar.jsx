import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav">
        <div className='logo-container'>
          <h1 className='logo'><span>A</span>czeal.</h1>
        </div>
        <div className='menu-container'>
          <ul className="menu" id="menu">
            <li><a className="item" href="#home">Home</a></li>
            <li><a className="item" href="#about">About</a></li>
            <li><a className="item" href="#project">Project</a></li>
            <li><a className="item" href="#contact">Contact</a></li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}
