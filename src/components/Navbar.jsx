import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='Navbar flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="logo" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>Home</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <p>About</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>Contact</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <p>Collection</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      </ul>


    </div>
  )
}

export default Navbar
