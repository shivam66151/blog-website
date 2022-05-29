import React from 'react'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="fab fa-facebook square"></i>
            <i className="fab fa-twitter square"></i>
            <i className="fab fa-pinterest square"></i>
            <i className="fab fa-instagram square"></i>
        </div>
        <div className='topCenter'>Center</div>
        <div className='topRight'>2</div>
    </div>
  )
}
