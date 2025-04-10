import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function AnonymousRoute({ role, redirectTo }) {
    const token =
        role === "admin"
            ? localStorage.getItem("adminToken")
            : localStorage.getItem("userToken");

    const isLoggedIn = !!token;

    return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Outlet />;
}
