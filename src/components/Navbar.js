import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/FirebaseConfig";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);

  const signOutFunc = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand " href="/" style={{ color: "white" }}>
          React Movie App
        </a>
        <div className="buttons">
          {currentUser ? (
            <h3>{currentUser.displayName}</h3>
          ) : (
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
          {currentUser ? (
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={signOutFunc}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
