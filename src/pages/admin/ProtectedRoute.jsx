import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const token = localStorage.getItem('adminToken');
  return token ? <Outlet /> : <Navigate to={"/admin/login"} />
}
