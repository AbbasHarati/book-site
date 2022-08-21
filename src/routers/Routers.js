import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Ortho from '../pages/Ortho'
import Endo from '../pages/Endo'
import Surgery from '../pages/Surgery'
import Tarmim from '../pages/Tarmim'
import Perio from '../pages/Perio'
import Prosthetics from '../pages/Prosthetics'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/Home' />} />
      <Route  path='/home' element={<Home />} />
      <Route  path='/Ortho' element={<Ortho />} />
      <Route  path='/Endo' element={<Endo />} />
      <Route  path='/Surgery' element={<Surgery />} />
      <Route  path='/Perio' element={<Perio />} />
      <Route  path='/Tarmim' element={<Tarmim />} />
      <Route  path='/Prosthetics' element={<Prosthetics />} />
      <Route  path='/about' element={<About />} />
      <Route  path='/contact' element={<Contact />} />
      <Route  path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routers
