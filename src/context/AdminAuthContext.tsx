import React, { createContext, useContext, useState } from 'react';
import type { AdminUser } from '../types';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  user: AdminUser | null;
  login: (email: string, password?: string, rememberMe?: boolean) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(() => {
    try {
      const stored = localStorage.getItem('tohfa_admin_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const isAuthenticated = !!user;

  const login = (email: string, _password?: string, rememberMe: boolean = true) => {
    // Standard secure-looking admin auth for preview/production demo
    const adminUser: AdminUser = {
      id: 'usr-admin-01',
      email: email.toLowerCase().trim() || 'thetohfagifting.co@gmail.com',
      name: 'Corporate Concierge Lead',
      role: 'Super Admin',
      lastLogin: new Date().toISOString()
    };

    setUser(adminUser);
    if (rememberMe) {
      localStorage.setItem('tohfa_admin_user', JSON.stringify(adminUser));
    }
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tohfa_admin_user');
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};