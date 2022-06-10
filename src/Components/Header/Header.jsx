import React from 'react'
import logo from '../../Assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" className="header__logo" />
    </div>
  )
}

export default Header;