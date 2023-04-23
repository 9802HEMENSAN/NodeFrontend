import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar