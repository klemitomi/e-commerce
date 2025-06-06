import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="logo" />
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
      <NavLink to='/product' className='flex flex-col items-center gap-1'>
        <p>Product</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/cart' className='flex flex-col items-center gap-1'>
        <p>Cart</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/login' className='flex flex-col items-center gap-1'>
        <p>Login</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/placeorder' className='flex flex-col items-center gap-1'>
        <p>Place Order</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      <NavLink to='/orders' className='flex flex-col items-center gap-1'>
        <p>Orders</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
      </NavLink>
      </ul>

    </div>
  )
}

export default Navbar
