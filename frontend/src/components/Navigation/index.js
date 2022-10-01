import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";
//imported LoginFormModal

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const location = useLocation();

  let sessionLinks;
  if (sessionUser?.id && location.pathname === "/") {
    sessionLinks = (
      <>
        <NavLink className="nav-item" to="/playlists">
          My Playlists
        </NavLink>
        <ProfileButton className="nav-item" user={sessionUser} />
      </>
    );
  } else if (!sessionUser?.id && location.pathname === "/") {
    sessionLinks = (
      <>
        {/* <NavLink className="nav-item" to="/login">
          <button className="btn-1">Sign in</button>
        </NavLink> */}
        <LoginFormModal />
        {/* <NavLink className="nav-item" to="/signup">
          <button className="btn">Create account</button>
        </NavLink> */}
        <SignupFormModal />
      </>
    );
  } else if (!sessionUser?.id && location.pathname === "/albums") {
    sessionLinks = (
      <>
        {/* <NavLink className="nav-item" to="/login">
          <button className="btn-1">Sign in</button>
        </NavLink> */}
        <NavLink className="nav-item" to="/">
          <button className="btn-1">Home</button>
        </NavLink>
        {/* <NavLink className="nav-item" to="/albums">
          Albums
        </NavLink> */}
        {/* <NavLink className="nav-item" to="/login">
          Log In
        </NavLink> */}
        <LoginFormModal />
        {/* <NavLink className="nav-item" to="/signup">
          Sign Up
        </NavLink> */}
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className="navbar">
      <img
        src="/images/SoundCloud-logo.png"
        alt="SoundCloud logo"
        className="logo"
      />
      <ul className="nav-links">
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
