import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact' 
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="App px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App

