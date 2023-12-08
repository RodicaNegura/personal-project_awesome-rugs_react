import React from 'react'
import "./navigation.style.css"
import { Link } from 'react-router-dom'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {

  return (
    <div className='navigation'>
      <div className='navigation-logo'>
        <MenuIcon />
        <a href="/" className="logo"> <span>Awesome</span>Rugs</a>
      </div>
      <div className='navigation-links'>
        <Link to="/"> Home </Link>
        <Link to="rugs/"> Rugs </Link>
        <Link to="/services"> Services </Link>
        <Link to="/featured"> Featured </Link>
        <Link to="/reviews"> Reviews </Link>
        <Link to="/contact"> Contact </Link>
      </div>
      <div>
        <button className='navigationBtn'>login</button>
        <PermIdentityIcon/>
      </div>
    </div>
  )
}

export default Navigation
