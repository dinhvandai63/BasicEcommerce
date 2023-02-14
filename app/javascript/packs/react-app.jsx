// Run this by adding <%= javascript_pack_tag 'react-app' %> to the head of your layout file,


import React from 'react'
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types'
import './react-app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/components/home'
// import InstructorIndex from '../src/components/admin/instructor_index'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={ <Home/> } />
        {/* <Route path='instructors/new' element={ <Instructor/> } /> */}
      </Routes>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('react-app')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
})