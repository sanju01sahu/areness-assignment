import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { store } from '../Redux/Store'

export const PrivateRoute = ({children}) => {
    
    // console.log(isAuth)
    return isAuth ? children : <Navigate to={"/login"}/>
  
}