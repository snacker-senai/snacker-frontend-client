import React from 'react'
import { Navigate } from 'react-router-dom'
import { UnauthorizedStyles } from './styles'

export const Unauthorized = () => {
    const token = localStorage.getItem('accessToken')

    if (token) {
        return <Navigate to={'/'} />
    }

    return (
        <UnauthorizedStyles>
            <h1>Sessão inválida!</h1>
            <h2>Escaneie o QR Code para acessar o cardápio.</h2>
        </UnauthorizedStyles>
    )
}
