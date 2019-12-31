import React from 'react'
// import { Link } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {

  return (
    <header>
      <div className="brand">
        <div className="logo">
          <h4>Tommy Liang | Software Engineer</h4>
        </div>
      </div>
      <nav className="navbar-nav">
        <ul>
          <li className="navbarItem"><a className="aItem" to="/Projects">Projects</a></li>
          <li className="navbarItem"><a className="aItem" to="/About">About</a></li>
          <li className="navbarItem"><a className="aItem" href="https://drive.google.com/file/d/12ZnhcA5XGJIXhu78_qV3FVt-njPZOXab/view?usp=sharing" target="_blank">Resume</a></li>
          <li className="navbarItem"><a className="aItem" to="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar