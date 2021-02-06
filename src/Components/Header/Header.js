import React, {userState, useEffect} from 'react'
import { withRouter, Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../img/logo.png'



const Header = (props) => {
    return (
        <header class='header'>
            <img class='header-logo' src={logo}/>
            {/* <h1>MemeMountain</h1>
            {props.location.pathname !== '/'
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