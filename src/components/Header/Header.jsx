import React, { useState } from 'react'
import './Header.css'

const header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header className='header'>
      <nav>
          <h2 className='brand-name'><a href="#">Portfolio</a></h2>
          <i className="ri-menu-fill toggle" onClick={toggleMenu}></i>
          <ul className={`header-menu ${menuOpen ? 'open' : ''}`}>
              <i className="ri-close-line close-toggle" onClick={toggleMenu}></i>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Blog</a></li>
              <li className='header-btn'><a href="#">Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default header
