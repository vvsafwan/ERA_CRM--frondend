import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AdminProtectedRoute from "./pages/admin/AdminProtectedRoute";
import UserProtectedRoute from "./pages/user/UserProtectedRoute";
import AnonymousRoute from "./guard/AnonymousRoute";

// User components
const UserLogin = lazy(() => import('./pages/user/UserLogin'));
const Register = lazy(() => import('./pages/user/Register'));

//Admin components
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminUserList = lazy(() => import('./pages/admin/AdminUserList'));
const AdminStudentList = lazy(() => import('./pages/admin/AdminStudentList'));
const AdminStudentProfile = lazy(() => import('./pages/admin/AdminStudentProfile'));

//user components
const UserLayout = lazy(() => import('./layouts/UserLayout'));
const UserDashboard = lazy(() => import('./pages/user/UserDashboard'));
const UserStudentList = lazy(() => import('./pages/user/UserStudentList'));
const UserStudentProfile = lazy(() => import('./pages/user/UserStudentProfile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {

  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>

          {/* User Routes */}
          {/* <Route path="/register" element={<Register />} /> */}

          {/* Admin Routes */}  
          <Route element={<AnonymousRoute role="admin" redirectTo="/admin/user-list" />}>
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>
          
          <Route element={<AdminLayout />}>
            <Route element={<AdminProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/user-list" element={<AdminUserList />} />
              <Route path="/admin/student-list" element={<AdminStudentList />} />
              <Route path="/admin/student-list/:id" element={<AdminStudentProfile />} />
            </Route>
          </Route>

          {/* User Routes */}  
          <Route element={<AnonymousRoute role="user" redirectTo="/user/dashboard" />}>
            <Route path="/user/login" element={<UserLogin />} />
          </Route>

          <Route element={<UserLayout />}>
            <Route element={<UserProtectedRoute />}>
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/student-list" element={<UserStudentList />} />
              <Route path="/user/student-list/:id" element={<UserStudentProfile />} />
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
