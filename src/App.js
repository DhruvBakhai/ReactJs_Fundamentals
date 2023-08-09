import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
/* import About from "./Components/About"; */

import OrderSummary from "./Components/OrderSummary";
import Profile from "./Components/Profile";
import NoMatch from "./Components/NoMatch";
import { AuthProvider } from "./Components/auth";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";
import React from "react";
const lazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="loading...">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<lazyAbout />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NoMatch />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </React.Suspense>
    </div>
  );
}

export default App;
