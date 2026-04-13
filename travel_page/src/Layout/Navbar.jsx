import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo">
            <p>A</p>
        </div>
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar