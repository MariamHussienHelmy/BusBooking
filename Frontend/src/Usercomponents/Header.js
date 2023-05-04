import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeAuthUser, getAuthUser } from '../helper/Storage';
import Axios from 'axios';

import '../UserStyle/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuthUser();
  // const Logout = async () => {
  //   await Axios.put('http://localhost:4000/auth/logout/' + auth.id);

  //   removeAuthUser();
  // };

  const Logout = () => {
    removeAuthUser();
    navigate('/');
  };

  return (
    <header>
      <div className='inner-width'>
        <h1 className='logo'>Bus Ticket</h1>
        {/* <i class='menu-toggle-btn fas fa-bars'></i> */}
        <nav className='navigation-menu'>
          <Link to='/tickets'>Tickets</Link>
          {auth && <Link to='/profile'>Profile</Link>}

          {auth && (
            <Link to='/login' onClick={Logout}>
              {/* <div id='sign'>Logout</div> */}
              Logout
            </Link>
          )}
          {!auth && <Link to='/register'>Signup</Link>}
          {!auth && (
            <Link to='/login'>
              Login
              {/* <div id='sign'>login</div> */}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;