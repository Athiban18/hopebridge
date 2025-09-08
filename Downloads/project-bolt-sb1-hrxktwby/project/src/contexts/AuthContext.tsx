import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('akfinity_token');
    const userData = localStorage.getItem('akfinity_user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        localStorage.removeItem('akfinity_token');
        localStorage.removeItem('akfinity_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would call your FastAPI backend
    if (email === 'demo@akfinity.com' && password === 'demo123') {
      const mockUser: User = {
        id: '1',
        email: email,
        name: 'Demo User'
      };
      
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('akfinity_token', mockToken);
      localStorage.setItem('akfinity_user', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock signup - in real app, this would call your FastAPI backend
    const mockUser: User = {
      id: Date.now().toString(),
      email: email,
      name: name
    };
    
    const mockToken = 'mock_jwt_token_' + Date.now();
    
    localStorage.setItem('akfinity_token', mockToken);
    localStorage.setItem('akfinity_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('akfinity_token');
    localStorage.removeItem('akfinity_user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};