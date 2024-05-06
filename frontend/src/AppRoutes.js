import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage }  from './pages/Home/HomePage'
import ComicPage from './pages/Comic/ComicPage'
import CartPage from './pages/Cart/CartPage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import AuthRoute from './components/AuthRoute/AuthRoute'
import AdminRoute from './components/AdminRoute/AdminRoute'
import OrdersPage from './pages/Orders/OrdersPage'
import AdminPage from './pages/Admin/AdminPage'
import AdminEditPage from './pages/AdminEdit/AdminEditPage'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search/:searchTerm" element={<HomePage/>} />
        <Route path="/comic/:id" element={<ComicPage/>} />
        <Route path="/cart" element={<AuthRoute> <CartPage/> </AuthRoute>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/checkout" element={<AuthRoute> <CheckoutPage/> </AuthRoute>} />
        <Route path="/orders" element={<AuthRoute> <OrdersPage/> </AuthRoute>} />
        <Route path="/admin" element={<AdminRoute> <AdminPage/> </AdminRoute> } />
        <Route path="/admin/addComic" element={<AdminRoute> <AdminEditPage/> </AdminRoute> } />
        <Route path="/admin/editComic/:comicId" element={<AdminRoute> <AdminEditPage/> </AdminRoute> } />
    </Routes>
  )
}
