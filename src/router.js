import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Contato from './pages/Contato'
import Footer from './template/Footer'
import Header from './template/Header'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
            <Routes > 
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default Router