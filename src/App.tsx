import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { GlobalStyle } from './styles/globalStyles'

export const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Main />} />
       </Routes>
     </BrowserRouter>
     <GlobalStyle />
    </>
  )
}
