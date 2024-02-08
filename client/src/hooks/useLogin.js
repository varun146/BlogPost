import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogin = ({ setToken }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuth();

  const login = async (username, password) => {
    setIsLoading(true);

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json);
    } else {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      setToken(window.localStorage.getItem("user"));
      localStorage.setItem("username", json.username);
      dispatch({ type: "LOGIN", payload: json });
      setError(json);
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};

export default useLogin;
