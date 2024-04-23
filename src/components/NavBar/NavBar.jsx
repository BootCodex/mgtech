import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './navbar.css';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <Link className='logo' to={"/"}><img src={logo} alt="mg logo" /></Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to={"/About"}>About</NavLink></li>
        <li><NavLink to={"/Services"}>Services</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>
        <li><NavLink to={"/Blog"}>Blog</NavLink></li>
      </ul>
    </nav>

  )
}

export default NavBar