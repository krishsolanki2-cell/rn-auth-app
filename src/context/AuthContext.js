import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // If you need to do something on mount without storage, do it here
  }, []);

  // Login function
  const login = async (email, password) => {
    if (email === 'test@example.com' && password === '123456') {
      const loggedInUser = { name: 'Test User', email };
      setUser(loggedInUser);
      return { success: true };
    } else {
      return { success: false, error: 'Invalid email or password' };
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    if (!name || !email || !password) {
      return { success: false, error: 'All fields are required' };
    }
    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    const newUser = { name, email };
    setUser(newUser);
    return { success: true };
  };

  // Logout function
  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};