// context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { supabase } from "@/utils/supabaseClient";

// Define the shape of our authentication context
type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component to provide the authentication state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); 

  // Sync state with localStorage and Supabase session
  useEffect(() => {
    const session = supabase.auth.getSession();

    const checkSession = async () => {
      setLoading(true); // Start loading when checking session

      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        localStorage.setItem("isLoggedIn", "true");
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("isLoggedIn");
        setIsAuthenticated(false);
      }

      setLoading(false); // End loading after session is checked
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setLoading(true);
      if (session) {
        localStorage.setItem("isLoggedIn", "true");
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("isLoggedIn");
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // Login function for email and password
  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        throw new Error(error.message);
      }
    },
    []
  );

  // Login function for Google Sign-In
  const loginWithGoogle = useCallback(async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    setLoading(false);
    if (error) {
      throw new Error(error.message);
    }
  }, []);

  // Logout function
  const logout = useCallback(async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      throw new Error(error.message);
    }
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const value = React.useMemo(
    () => ({ isAuthenticated, login, loginWithGoogle, logout, loading }),
    [isAuthenticated, login, loginWithGoogle, logout, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};