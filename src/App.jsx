import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App