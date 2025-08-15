import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRegister } from './pages/AdminRegister'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <AdminRegister/> }/>
      <Route path='/login' element={ <LoginPage/> }/>
      <Route path='/dashboard' element={ <Dashboard/> }/>
    </Routes>

    </>
  )
}

export default App