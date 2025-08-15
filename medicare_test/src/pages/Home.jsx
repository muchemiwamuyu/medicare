import React from 'react'
import CustomForm from '../components/CustomForm'

function Home() {
  return (
    <div className='h-screen'>
      <h1 className='text-3xl font-bold text-center mt-10'>Welcome to the Home Page</h1>
      <CustomForm />
    </div>
  )
}

export default Home