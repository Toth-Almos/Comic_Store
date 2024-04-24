import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage }  from './pages/Home/HomePage'
import ComicPage from './pages/Comic/ComicPage'
import CartPage from './pages/Cart/CartPage'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search/:searchTerm" element={<HomePage/>} />
        <Route path="/comic/:id" element={<ComicPage/>} />
        <Route path="/cart" element={<CartPage/>} />
    </Routes>
  )
}
