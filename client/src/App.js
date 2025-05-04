import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import StoreList from './pages/StoreList';
import StoreDetails from './pages/StoreDetails';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import AdminUserList from './pages/AdminUserList';
import AdminStoreList from './pages/AdminStoreList';
import AdminAddUser from './pages/AdminAddUser';
import AdminAddStore from './pages/AdminAddStore';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container py-6">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected Routes */}
              <Route path="/stores" element={
                <PrivateRoute>
                  <StoreList />
                </PrivateRoute>
              } />
              <Route path="/stores/:id" element={
                <PrivateRoute>
                  <StoreDetails />
                </PrivateRoute>
              } />
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={
                <PrivateRoute roles={['admin']}>
                  <AdminDashboard />
                </PrivateRoute>
              } />
              <Route path="/admin/users" element={
                <PrivateRoute roles={['admin']}>
                  <AdminUserList />
                </PrivateRoute>
              } />
              <Route path="/admin/stores" element={
                <PrivateRoute roles={['admin']}>
                  <AdminStoreList />
                </PrivateRoute>
              } />
              <Route path="/admin/users/add" element={
                <PrivateRoute roles={['admin']}>
                  <AdminAddUser />
                </PrivateRoute>
              } />
              <Route path="/admin/stores/add" element={
                <PrivateRoute roles={['admin']}>
                  <AdminAddStore />
                </PrivateRoute>
              } />
              
              {/* Store Owner Routes */}
              <Route path="/owner/dashboard" element={
                <PrivateRoute roles={['store_owner']}>
                  <StoreOwnerDashboard />
                </PrivateRoute>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 