import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-60 h-10 rounded-lg bg-white 
        flex items-center justify-center font-bold shadow-md"
        >
          <p className='purple-gradient_text'>Welcome</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={ ({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
              About
          </NavLink>
          <NavLink to="/projects" className={ ({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
              Projects
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar