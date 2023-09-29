import React, { createContext, useContext, useState } from 'react';

// Crea el contexto de autenticación
const AuthContext = createContext();

// Proporciona un componente de contexto para envolver tu aplicación
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para acceder al contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}
