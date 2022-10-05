import React from 'react'
import { useAuth } from "../../context/AuthContext"
import { ThemeProvider as SCThemeProvider } from 'styled-components'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useAuth()

    return (
        <SCThemeProvider theme={theme}>
            {children}
        </SCThemeProvider>
    )
}