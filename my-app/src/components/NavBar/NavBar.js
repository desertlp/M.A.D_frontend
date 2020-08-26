import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ currentUser, logout }) {
  return (
    <nav>
      <div className="container">

        <NavLink className="logo" to='/'>
          <img src={require('./logo.jpg')}></img>
        </NavLink>

        <ul className="nav-list">

          <li className='nav-item'>
            {/* Don't forget the 'exact' prop for home nav link */}
            <NavLink className='nav-link' exact to='/'>Home</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/video'>Videos</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/bts'>BTS</NavLink>
          </li>
          
          <li className='nav-item'>
            <NavLink className='nav-link' to='/video/new'>Add Video</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to='/bts/new'>Add BTS</NavLink>
          </li>

          {/* IF LOGGED IN */}
          {/* NEED TO LOCK DOWN THE CRUD PATHS FOR VIDEO/BTS/PROFILE if you are not user that created the page */}
          {currentUser && (
            <React.Fragment>

              <li className='nav-item'>
                <span onClick={logout} className='nav-link'>Logout</span>
              </li>

            </React.Fragment>
          )}
          
          {/* IF NOT LOGGED IN */}
          {!currentUser && (
            <>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
              </li>
            </>
          )}

          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
