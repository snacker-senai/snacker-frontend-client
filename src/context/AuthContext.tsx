import React, { createContext, useContext, useState } from 'react'
import { AuthService } from '../services/Auth/AuthService'

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
}

export const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)

  const logout = async () => {
    localStorage.removeItem('accessToken')
    setUser(null)
    window.location.replace('/unauthorized')
  }

  const getClientSessionInfo = async () => {
      const { number } = await AuthService.getCurrentUser()
      setUser({ number })
  }

  return (
    <AuthContext.Provider value={{
      logout,
      user,
      setUser,
      getClientSessionInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)