import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

import SearchBooks from '../pages/SearchBooks'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/Home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/SearchBooks' element={<SearchBooks />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routers
