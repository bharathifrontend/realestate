import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
    } catch (error) {
      console.log("Error during signup", error);
      alert(error);
    }
  };

  return (
    <div className="signup p-4 max-w-md mx-auto">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
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
        onClick={handleSignup}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Sign up
      </button>
    </div>
  );
}

export default Signup;
