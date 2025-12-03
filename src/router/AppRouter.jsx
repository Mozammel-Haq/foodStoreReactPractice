import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/public/Home'
import About from '../pages/public/About'
import Contact from '../pages/public/Contact'
import Foods from '../pages/public/Foods'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Page404 from '../pages/public/Page404'
import Cart from '../pages/public/Cart'
import FoodDetails from '../pages/public/FoodDetails'
const AppRouter = () => {
  return (
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/food-detail' element={<FoodDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<Page404/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter