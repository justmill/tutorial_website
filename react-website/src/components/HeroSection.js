import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
          <h2>What are you waiting for?</h2>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' butssonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--outline' butssonSize='btn--large'>Watch Trailer</Button>
        </div>
    </div>
  )
}

export default HeroSection