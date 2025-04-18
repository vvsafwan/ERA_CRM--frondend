import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function UserProtectedRoute() {
    const token = localStorage.getItem('userToken');
  return token ? <Outlet /> : <Navigate to={"/user/login"} />
}
