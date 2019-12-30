import React from 'react'
import '../css/navbar.css'
import navbarmenu from '../resources/bars-solid.svg'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar"/>
        <span class="navbar-toggle" id="js-navbar-toggle">
          <img className="burgermenu" src={navbarmenu} alt="burger"/>
        </span>
        <a href="#" className="logo">Tommy Liang</a>
        <ul class="main-nav" id="navbar-container">
          <li>
            <a href="#" className="nav-links">Projects</a>
          </li>
          <li>
            <a href="#" className="nav-links">About</a>
          </li>
          <li>
            <a href="#" className="nav-links">Contact</a>
          </li>
          <li>
            <a href="#" className="nav-links">Resume</a>
          </li>
        </ul>
      <nav/>
    </div>
  )
}
