import React, { useState } from 'react'
import '../App.css'

import { Link } from 'react-router-dom'

function NavBar() {
  const [click, setClick] = useState(false)

  const handleMenuClick = () => {
    setClick(!click)
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <i className="fab fa-dyalog fa-2x"> </i> enzel
          </Link>

          <nav>
            <ul className="mainNav-container">
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutMe" className="nav-links">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-links">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="navbarMobile" onClick={handleMenuClick}>
            <i className={click ? 'fa fa-times fa-2x' : 'fa fa-bars fa-2x'}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
