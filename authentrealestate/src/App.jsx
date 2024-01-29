import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "C:/Users/SANTHOSH/React/authentrealestate/src/pages/Home.jsx";
import "./App.css";
import Authendication from "./authent/Authendication";
import { auth } from "./firebase";
import PropertyDetails from "./pages/PropertyDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user ? <Home user={user} /> : <Authendication Signup={false} />
              }
            />

            <Route path="/home" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Authendication" element={<Authendication />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
