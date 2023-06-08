import React from 'react'
import card from '../assets/Card.jpeg'

export default function Project() {
  return (
    <div id='project'>
      <div className='pr-container'>
        <div className='sub-container'>
          <h2 className='sub-title'>PROJECTS</h2>
          <p className='text-expo'>
            Here you will find some of the personal projects that I created.
          </p>
        </div>
        <div className='works'>
          <div className='card'>
            <img src={card} alt="Image" className='card-img'/>
            <div className='pr-description'>
              <h2>Speed Typing Test App</h2>
              
              <div className='prere'>
                <h3>Prerequisite:</h3>
                <button className='skill2'>HTML</button>
                <button className='skill2'>CSS</button>
                <button className='skill2'>BootStrap</button>
                <button className='skill2'>JavaScript</button>
                <button className='skill2'>React</button>
              </div>
              <p><strong>About the project:</strong><br /> This application fetches a set of new random words from an API, upon entering the site, and displays it in the browser. You will find this Speed Typing Test acuurate and helpful to increase your typing speed.</p>
              <div className='btn-container'> 
                <a className='go-btn' href='https://aczeal14.github.io/React-Typing-Test/' target='blank'>Link</a>
                <a className='go-btn' href="https://github.com/Aczeal14/React-Typing-Test" target='blank'>Code</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
