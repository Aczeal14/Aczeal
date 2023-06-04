import React from 'react'

export default function Project() {
  return (
    <div id='project'>
      <div className='pr-container'>
        <div className='sub-container'>
          <h2 className='sub-title'>PROJECTS</h2>
          <p className='text-expo'>
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
          </p>
        </div>
        <div className='works'>
          <div className='card'>
            <img src="/src/assets/Card.jpeg" alt="Image" className='card-img'/>
            <div className='pr-description'>
              <h2>Speed Typing Test App</h2>
              <h3>Prerequisite:</h3>
              <div className='prere'>
                <button className='skill2'>HTML</button>
                <button className='skill2'>CSS</button>
                <button className='skill2'>BootStrap</button>
                <button className='skill2'>JavaScript</button>
                <button className='skill2'>React</button>
              </div>
              <p><strong>About the project:</strong> This application fetches a set of new random words from an API, upon entering the site, and displays it in the browser. You will find this Speed Typing Test acuurate and helpful to increase your typing speed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
