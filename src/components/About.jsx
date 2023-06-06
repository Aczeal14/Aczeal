import React from 'react'

export default function About() {
  return (
    <div id='about'>
      <div className='ab-container'>
        <div className='sub-container'>
          <h2 className='sub-title'>About Me</h2>
          <p className='text-expo'>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className='about-container'>
          <div className='about-left'>
            <h3 className='demi-title'>Hi, I'm Joshua | Get to know me!</h3>
            <br />
            <div className='des'>
              <b>Dream | Passion | Will</b> 
            <br />
            <br />

              I started my dev journey a few years ago, where I started getting into tech and its wonders,
              coincidantaly found a video on programming, and since then, I was completely hooked to the world of computers.

            <br />
            <br />

              In the years, I've cultivated my passion for coding by studying and watching tutorials, but most of all, by building small projects, 
              so that I could challenge myself.

            <br />
            <br />

              Lately, I've discovered my passion for the world of web development and the beauty behind building useful websites like 
              the one you will find in this portfolio. I'm now looking for Job opportunities where I can contribute, learn and grow. 
              to finally kick start my career and learn among professionals.
            </div>
          </div>
          <div className='about-right'>
            <h3 className='demi-title'>My Skills</h3>
            <div className='skill-list'>
              <button className='skill'>HTML</button>
              <button className='skill'>CSS</button>
              <button className='skill'>BootStrap</button>
              <button className='skill'>JavaScript</button>
              <button className='skill'>React JS</button>
              <button className='skill'>Python</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
