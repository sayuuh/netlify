import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="content-logo"></div>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contato'>Contato</NavLink>
        </nav>
    </header>
  )
}

export default Header