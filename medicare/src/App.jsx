import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRegister } from './pages/AdminRegister'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <AdminRegister/> }/>
    </Routes>

    </>
  )
}

export default App