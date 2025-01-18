import React from 'react'
import { getUserFromLocalStorage, isLogin } from '../helpers'
import { Navigate } from 'react-router-dom'

const Authentication = ({ children }) => {

    if(!isLogin()) {
        return <Navigate to="/login" />
    }

    const { expireTime } = getUserFromLocalStorage();

    if(Date.now() > new Date(expireTime)) {
        return <Navigate to="/login" />
    }


  return (
    <>{children}</>
  )
}

export default Authentication