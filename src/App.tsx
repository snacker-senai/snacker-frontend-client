import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { GlobalStyle } from './styles/globalStyles'
import 'react-toastify/dist/ReactToastify.css';
import { MenuProvider } from './context/MenuContext'
import { CartProvider } from './context/CartContext'

export const App = () => {
  return (
    <MenuProvider>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
      </CartProvider>
    </MenuProvider>
  )
}
