import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route/>
        </Routes>
      </div>
    </>
  )
}

export default App
