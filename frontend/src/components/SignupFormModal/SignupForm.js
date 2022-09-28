import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser?.id) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          firstName,
          lastName,
          email,
          username,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p id="create-title">Create your SoundCloud account</p>
      {/* <label>
        First Name */}
      <div id="create-top">
        <input
          type="text"
          value={firstName}
          placeholder="Your first name"
          onChange={(e) => setFirstName(e.target.value)}
          // required
          className="sign-email"
        />
        {/* </label> */}
        {/* <label>
        Last Name */}
        <input
          type="text"
          value={lastName}
          placeholder="Your last name"
          onChange={(e) => setLastName(e.target.value)}
          // required
          className="sign-email"
        />
        {/* </label> */}
        {/* <label>
        Email */}
        <input
          type="text"
          value={email}
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
          // required
          className="sign-email"
        />
      </div>
      {/* </label> */}
      <hr id="sign-hr" />
      <div id="create-bottom">
        <label className="create-label">Choose a username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // required
          className="sign-user"
        />
        <label className="create-label">Choose a password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // required
          className="sign-user"
        />
        <label className="create-label">Confirm your password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          // required
          className="sign-user"
        />
        <p id="create-fine">
          By signing up I accept the Terms of Use. I have read and understood
          the Privacy Policy and Cookies Policy.
        </p>
        <button type="submit" id="accept-btn">
          Accept & continue
        </button>
      </div>
      <ul className="sign-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </form>
  );
}

export default SignupForm;
