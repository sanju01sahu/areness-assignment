import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { store } from '../Redux/Store'

export const PrivateRoute = ({children}) => {
    let token = JSON.parse(localStorage.getItem("token"));
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(isAuth)
    return token && user ? children : <Navigate to={"/login"}/>
  
}