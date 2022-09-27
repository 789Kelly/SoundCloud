import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [credential2] = useState("FakeUser1");
  const [password, setPassword] = useState("");
  const [password2] = useState("password2");
  const [errors, setErrors] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    setErrors([]);
    // return dispatch(sessionActions.login({ credential, password })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        if (!sessionUser?.id)
          setErrors([...errors, "Invalid username or password"]);
      }
    );
  };

  const clickHandler2 = (e) => {
    e.preventDefault();
    // setCredential("FakeUser1");
    // setPassword("password2");
    setErrors([]);
    // return dispatch(sessionActions.login({ credential, password })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
    return dispatch(
      sessionActions.login({ credential: credential2, password: password2 })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      if (!sessionUser?.id)
        setErrors([...errors, "Invalid username or password"]);
    });
  };

  return (
    <form>
      <div className="modal-container">
        <ul className="login-ul-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        {/* <label> */}
        {/* Username or Email */}
        <input
          type="text"
          placeholder="Your email address or username"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          className="email"
        />
        {/* </label> */}
        <label>
          {/* Password */}
          <input
            placeholder="Your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="email"
          />
        </label>
        <button
          type="submit"
          disabled={errors.length > 0}
          id="login-btn"
          onClick={(e) => clickHandler(e)}
        >
          Continue
        </button>
        <p id="text">
          When registering, you agree that we may use your provided data for the
          registration and to send you notifications on our products and
          services. You can unsubscribe from notifications at any time in your
          settings. For additional info please refer to our Privacy Policy.
        </p>
        <div id="or-div">
          <hr />
          <p id="or">or</p>
          <hr />
        </div>
        <button
          id="login-btn-demo"
          disabled={errors.length > 0}
          onClick={(e) => clickHandler2(e)}
        >
          Continue with demo credentials
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
