/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { AuthService } from '../../services/Auth/AuthService'

interface IPrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { setUser } = useAuth()
  const token = localStorage.getItem('accessToken')

  const getCurrentUser = async () => {
    const user = await AuthService.getCurrentUser()

    setUser(user)
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  if (token) {
    return children
  }

  return <Navigate to="/unauthorized" />
}