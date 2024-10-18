import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/Signup'
import Dashboard from '../Pages/Dashboard'
import { PrivateRoute } from './PrivateRoute'



function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes