import React from 'react';
// import Logo from '../assets/awesome-logo-small-nobg.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import '../styles/navbar.css';
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
      {/* <div className='leftSide'>
        <img src={Logo} alt='logo'/>
      </div> */}
      <div>
        <button>
            <ReorderIcon/>
          </button>
      </div>
      <a href="/" className="logo"> <span>awesome</span>Rugs</a>

      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="rugs/"> Rugs </Link>
        <Link to="/services"> Services </Link>
        <Link to="/featured"> Featured </Link>
        <Link to="/reviews"> Reviews </Link>
        <Link to="/contact"> Contact </Link>
        <button>
          <PermIdentityIcon/>
        </button>
      </div> 
      <button> Login </button>
    </div>
  )
};

export default Navbar;
