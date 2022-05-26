import React, { createContext, useContext, useState } from 'react'

export interface IUser {
    table: string
}

interface IAuthProviderProps {
    children: React.ReactNode
}

interface IAuthContextProps {
  logout(): void
  user: IUser | null
  setUser(user: IUser): void
  newBill(token: string): Promise<boolean>
}

export const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)

  const logout = async () => {
    localStorage.removeItem('accessToken')
    setUser(null)
    window.location.replace('/unauthorized')
  }

  const newBill = async (token: string) => {
    function timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await timeout(3000)

    return true
  }

  return (
    <AuthContext.Provider value={{
      logout,
      user,
      setUser,
      newBill
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)