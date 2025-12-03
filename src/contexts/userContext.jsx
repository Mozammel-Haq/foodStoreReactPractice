import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL; 

  const initialState = {
  user: null,
  loading: true,
  error: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case "LOAD_USER":
      return { ...state, user: action.payload, loading: false, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "LOGIN_FAIL":
      return { ...state, user: null, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null, loading: false, error: null };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("food-user");
    if (savedUser) {
      dispatch({ type: "LOAD_USER", payload: JSON.parse(savedUser) });
    } else {
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "LOAD_USER", payload: null });
    }
  }, []);

  // Login
  const login = async (email, password) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.post(`${baseUrl}/user/login`, { email, password });

      if (res.data.success === "yes") {
        const returnedUser = res.data.user;
        localStorage.setItem("food-user", JSON.stringify(returnedUser));
        dispatch({ type: "LOGIN_SUCCESS", payload: returnedUser });
        return { success: true, data: returnedUser };
      } else {
        dispatch({ type: "LOGIN_FAIL", payload: res.data.message || "Invalid credentials" });
        return { success: false, error: res.data.message || "Invalid credentials" };
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL", payload: "Login failed" });
      return { success: false, error: "Login failed" };
    }
  };

   const logout = () => {
    localStorage.removeItem("food-user");
    dispatch({ type: "LOGOUT" });
  };
 return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
