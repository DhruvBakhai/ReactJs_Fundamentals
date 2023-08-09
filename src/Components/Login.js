import React, { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const auth = useAuth();
  const location = useLocation();
  const redirectpath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectpath, { replace: true });
  };
  return (
    <>
      <label>
        Username :{" "}
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          placeholder="place your username here.."
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
