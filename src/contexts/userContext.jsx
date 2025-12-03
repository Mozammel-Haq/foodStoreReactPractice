import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load saved user
  useEffect(() => {
    const savedUser = localStorage.getItem("food-user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Login
  async function login(email, password) {
  try {
    const res = await axios.post(`${baseUrl}/user/login`, { email, password });

    if (res.data.success === "yes") {
      const returnedUser = res.data.user;
      setUser(returnedUser);
      localStorage.setItem("food-user", JSON.stringify(returnedUser));
      return { success: true, data: returnedUser };
    } else {
      // Login failed
      return { success: false, error: res.data.message || "Invalid credentials" };
    }
  } catch (err) {
    console.error(err);
    return { success: false, error: "Login failed" };
  }
}

  function logout() {
    localStorage.removeItem("food-user");
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
