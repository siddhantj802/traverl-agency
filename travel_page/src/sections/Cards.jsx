import React from 'react'
import './Cards.css'
import coralReef from '../assets/coral_reef.png'
import eStreet from '../assets/e_street.png'
import sandDunes from '../assets/sand_dunes.png'
function Cards() {
  return (
    <>
    <div className='cards'>
        <div className="card">
            <div className="card-img">
                <img src={coralReef} alt='coral-reef'/>
            </div>
            <div className="card-desc">
                 <div className="card-title">
                    <p>Turquoise Waters</p>
                </div>
                <div className="card-txt">
                    <p>Dive into the world's most pristine marine ecosystems.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={eStreet} alt='coral-reef'/>
            </div>
            <div className="card-desc">
                 <div className="card-title">
                    <p>Hidden European Gems</p>
                </div>
                <div className="card-txt">
                    <p>Uncover the charm of lesser-known historical cities </p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={sandDunes} alt='coral-reef'/>
            </div>
            <div className="card-desc">
                 <div className="card-title">
                    <p>Starlit Sahara</p>
                </div>
                <div className="card-txt">
                    <p>Experience the magic of the dessert under a canopy of stars.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="hr-line"></div>
    <p className='footer-p'>Copyright @2026 - Aura Travels</p>
    </>
  )
}

export default Cards