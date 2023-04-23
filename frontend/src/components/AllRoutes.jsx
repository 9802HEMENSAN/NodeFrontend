import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductBar from '../Pages/ProductBar'
 
import Login from './Login'
import Register from './Register'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>         
            <Route path="/products" element={<ProductBar/>}></Route>         
        </Routes>
    </div>
  )
}

export default AllRoutes