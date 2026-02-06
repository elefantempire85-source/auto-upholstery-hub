import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulated login - in production, this would call an API
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: { email: string; password: string }) => u.email === email && u.password === password
    );
    
    if (foundUser) {
      setUser({ id: foundUser.id, email: foundUser.email, name: foundUser.name });
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulated registration - in production, this would call an API
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.find((u: { email: string }) => u.email === email)) {
      return false; // User already exists
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ id: newUser.id, email: newUser.email, name: newUser.name });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
