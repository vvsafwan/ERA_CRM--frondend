import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import AnonymousRoute from "./guard/AnonymousRoute";

// User components
const Login = lazy(() => import('./pages/user/Login'));
const Register = lazy(() => import('./pages/user/Register'));

//Admin components
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminUserList = lazy(() => import('./pages/admin/AdminUserList'));
const AdminStudentList = lazy(() => import('./pages/admin/AdminStudentList'));
const AdminStudentProfile = lazy(() => import('./pages/admin/AdminStudentProfile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {

  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>

          {/* User Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route element={<AnonymousRoute role="admin" redirectTo="/admin/user-list" />}>
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>
          
          <Route element={<AdminLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/user-list" element={<AdminUserList />} />
              <Route path="/admin/student-list" element={<AdminStudentList />} />
              <Route path="/admin/student-list/:id" element={<AdminStudentProfile />} />
            </Route>
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
