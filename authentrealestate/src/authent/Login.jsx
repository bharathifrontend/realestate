import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (error) {
      console.log("Error during login", error);
    }
  };

  return (
    <div className="login p-4 max-w-md mx-auto">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
