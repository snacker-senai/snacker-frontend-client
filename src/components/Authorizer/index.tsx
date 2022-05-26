/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export const Authorizer = () => {
    const { token } = useParams()

    useEffect(() => {
        if (token) {
            localStorage.setItem('accessToken', token)
        }
    }, [])

    return <Navigate to="/" />
}
