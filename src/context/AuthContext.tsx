import React, { createContext, useContext, useState } from 'react'
import { AuthService, Theme } from '../services/Auth/AuthService'

export interface IUser {
    number: string
}

interface IAuthProviderProps {
    children: React.ReactNode
}

interface IAuthContextProps {
  logout(): void
  user: IUser | null
  setUser(user: IUser): void
  getClientSessionInfo(): void
  theme: Theme
}

export const AuthContext = createContext({} as IAuthContextProps)

const defaultTheme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')!) : {
  color: '#fff',
  fontColor: '#000',
  secondaryColor: '#fff',
  secondaryFontColor: '#000'
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const logout = async () => {
    localStorage.removeItem('accessToken')
    setUser(null)
    window.location.replace('/unauthorized')
  }

  const getClientSessionInfo = async () => {
      const { number, theme } = await AuthService.getCurrentUser()
      setUser({ number })
      setTheme(theme)
  }

  return (
    <AuthContext.Provider value={{
      logout,
      user,
      setUser,
      getClientSessionInfo,
      theme
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)