import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the auth context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return !!currentUser;
  };

  // Function to simulate login
  const login = async (email, password) => {
    // This is a placeholder for actual authentication logic
    // In a real app, you would call an API to authenticate
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any non-empty credentials
      if (email && password) {
        const user = {
          id: '1',
          email,
          name: 'Admin User',
          role: 'admin'
        };
        
        // Store user in localStorage for persistence
        localStorage.setItem('authUser', JSON.stringify(user));
        setCurrentUser(user);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Invalid credentials'
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'An error occurred during login'
      };
    }
  };

  // Function to logout
  const logout = () => {
    localStorage.removeItem('authUser');
    setCurrentUser(null);
  };

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuthState = () => {
      try {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
          setCurrentUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, []);

  // Auth context value
  const value = {
    currentUser,
    isLoading,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};