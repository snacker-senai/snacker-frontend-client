/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

interface IPrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { getClientSessionInfo } = useAuth()
  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    getClientSessionInfo()
  }, [])

  if (token) {
    return children
  }

  return <Navigate to="/unauthorized" />
}