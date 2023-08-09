import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>Welcome {auth.user}</div>
      <div>This is Profile page!</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
