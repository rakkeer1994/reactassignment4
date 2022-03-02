import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './Header'
import Contact from './Contact'
import Home from './Home'
import Student from './Student'
import AddStudent from './AddStudent'
import Table from './Table'
import './Style.css'
const App = () => {
  return (
    <>
    <Router>
      <Header />
         <Routes>
              <Route path='/' element =  {<Navigate to = '/home' />} />
              <Route path='/home' element={<Home/>} />
              <Route path='/student' element={<Student/>} />
                <Route path='/table' element={<Table />} /> <Route/>
              <Route path='/contact' element={<Contact/>} />
         </Routes>
    </Router>
    </>
  )
}

export default App