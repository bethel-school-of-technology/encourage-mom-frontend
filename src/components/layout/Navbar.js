import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../img/profile.png'

const Navbar = () => {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <h1>Crowned Jewels</h1>
            </li>
            <li className='dropdown'>
              <div className='dropbtn'>
                <Link to='/profile'>
                  <img src={profile} width='45px' />
                </Link>
                <div className='dropdown-content'>
                  <Link to='/signup'>Sign-up</Link>
                  <Link to='/login'>Login</Link>
                  <Link to='/logout'>Logout</Link>
                </div>
              </div>
            </li>
            <li className='nav-right'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='nav-right'>
              <Link to='/posts'>Posts</Link>
            </li>
            <li className='nav-right'>
              <Link to='/encouragement'>Weekly Encouragement</Link>{' '}
            </li>
            <li className='nav-right'>
              <Link to='/home'>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar