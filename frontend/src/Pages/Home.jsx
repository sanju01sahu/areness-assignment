import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './Signup'

const Home = () => {
  return (
    <>
    <div className='home'>
        <div>

    <Link to="/login" >Login</Link>
    <Link to="/register" >Register</Link>
        </div>
        <SignUp />
    </div>
    </>
  )
}

export default Home