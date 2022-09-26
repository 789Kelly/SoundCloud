import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

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
        <NavLink className="nav-item" to="/login">
          <button className="btn-1">Sign in</button>
        </NavLink>
        <NavLink className="nav-item" to="/signup">
          <button className="btn">Create account</button>
        </NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-item" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/albums">
          Albums
        </NavLink>
        <NavLink className="nav-item" to="/login">
          Log In
        </NavLink>
        <NavLink className="nav-item" to="/signup">
          Sign Up
        </NavLink>
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
