import React, { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./Signup";

function Authendication() {
  const [active, setActive] = useState("Login");

  const handleChange = () => {
    setActive(active === "Login" ? "Signup " : "Login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="container w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-lg font-bold ">
            <span className="text-violet-800 items-center">
              Welcome to our Property
            </span>
          </h1>
        </div>
        <div className="mt-8">
          {active === "Login" ? <Login /> : <Signup />}
        </div>
        <div className="text-center mt-4">
          <span>
            {active === "Login" ? (
              <>
                Don't have an account?
                <button
                  onClick={handleChange}
                  className="text-violet-800 font-bold hover:underline focus:outline-none"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Have an account?
                <button
                  onClick={handleChange}
                  className="text-violet-800 font-bold hover:underline focus:outline-none"
                >
                  Login
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authendication;
