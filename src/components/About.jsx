import React from 'react'
import profile from '../assets/profile.png'

export default function About() {
  return (
    <div id='about'>
      <div className='ab-container'>
        <div className='sub-container'>
          <h2 className='sub-title'>About Me</h2>
          <p className='text-expo'>
            Here you will find more information about me and what I do.
          </p>
        </div>
        <div className='about-container'>
          <div className='about-left'>
            <img src={profile} alt="profile" className='profile' />
          </div>
          <div className='about-right'>
            <h3 className='demi-title'>| Get to know me!</h3>
            <br />
            <div className='des'>
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
          
        </div>
        <div className='skill-container'>
          <div className='sub-container'>
            <h2 className='sub-title'>My Skills</h2>
            <p className='text-expo'>
              Here you will find information about my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className='about-container'>
            <div className='skill-list'>
              <p className='skill'><span2>01</span2> HTML</p>
              <p className='skill'><span2>02</span2> CSS</p>
              <p className='skill'><span2>03</span2> BootStrap</p>
              <p className='skill'><span2>04</span2> JavaScript</p>
              <p className='skill'><span2>05</span2> React JS</p>
              <p className='skill'><span2>06</span2> Python</p>
              <p className='skill'><span2>07</span2> MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
