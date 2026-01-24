import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [role, setRole] = useState(() => localStorage.getItem("role"));
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (data) => {
    setToken(data.token);
    setRole(data.role);
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    navigate("/"); // or dashboard
  };

  const logout = useCallback(() => {
    setToken(null);
    setRole(null);
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/loginx");
  }, [navigate]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "https://e-learning-api-production-a6d4.up.railway.app/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          logout();
          return;
        }

        const data = await res.json();
        setCurrentUser({
          id: data.id,
          name: data.name,
          email: data.email,
        });
      } catch (error) {
        console.error("Auth error:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [token, logout]);

  // Sync auth across tabs
  useEffect(() => {
    const syncAuth = () => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        currentUser,
        loading,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
