import React, {userState, useEffect} from 'react'
import { withRouter, Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../img/logo.png'



const Header = (props) => {
    return (
        <header className='header'>
            <img className='header-logo' src={logo}/>
            {/* {props.location.pathname !== '/dash'
              ? (
                  <nav>
                      <Link to='/dash' className='nav-links'>Dashboard</Link>
                      <Link to='/profile' className='nav-links'>Profile</Link>
                  </nav>
              )
              : null} */}
        </header>
    )
}

export default Header