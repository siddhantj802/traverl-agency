import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <div className='hero-section'>
        <div className="bg-img">
            <div className="hero-title">
                <p className='p-1'>Journey Beyond</p> 
                    <p className='p-2'>the ordinary.</p>
            </div>
            <div className="hero-text">
              <p>Discover curated, unforgettable traval experiences that redefine adventure.</p>
            </div>
            <div className="cta-btn">
              <button>explore destinations</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection