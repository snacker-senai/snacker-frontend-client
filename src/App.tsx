import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { GlobalStyle } from './styles/globalStyles'
import 'react-toastify/dist/ReactToastify.css'
import { PrivateRoute } from './components/PrivateRoute'
import { MenuProvider } from './context/MenuContext'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { Unauthorized } from './pages/Unauthorized'
import { Authorizer } from './components/Authorizer'

export const App = () => {
  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateRoute children={<Main />} />} />
              <Route path="/authorize/:token" element={<Authorizer />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
          </BrowserRouter>
          <GlobalStyle />
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  )
}
