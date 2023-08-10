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
import TestForm from "./Components/TestForm";
const lazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <div>
      <React.Suspense fallback="loading...">
        <AuthProvider>
          <Navbar />
          <TestForm />
          {/* <Routes>
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
          </Routes> */}
        </AuthProvider>
      </React.Suspense>
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// Alternate way to public routes and private routes
/* import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        Public Route: Home
        <Route path="/" exact component={Home} />

        Private Route: Dashboard
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;


import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true, // Change this based on actual authentication status
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
 */
