import React, { useEffect } from 'react'
import HomeContainer from '../containers/home';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'

import LoginPage from './login'

const HomePage = () => {

  let navigate = useNavigate();
  const { user } = useContext(AuthContext)

  console.log(user)
  if (!user) {
    console.log("user")
    navigate('/login')
    return <><LoginPage /></>
  } else {
    return (
      <>
        <HomeContainer />
      </>
    )
  }
}

export default HomePage