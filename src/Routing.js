import React from "react";
import { Route, Routes } from "react-router-dom";
import { isAuthenticated } from "./utils/auth";

import DashboardPage from "./pages/Private/DashboardPage";
import About from "./pages/Public/About";
import NoMatch from "./Components/Common/NoMatch";
import Home from "./Components/Home/Home";

function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated() ? <DashboardPage /> : <Home />}
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Routing;
