import React from "react";
import { Route, Routes } from "react-router-dom";
import { isAuthenticated } from "./utils/auth";

import LandingPage from "./pages/Public/LandingPage";
import DashboardPage from "./pages/Private/DashboardPage";
import About from "./pages/Public/About";
import NoMatch from "./Components/Common/NoMatch";

function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated() ? <DashboardPage /> : <LandingPage />}
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Routing;
