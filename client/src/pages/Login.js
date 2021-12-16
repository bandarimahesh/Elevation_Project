import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginFormSubmitHandler = (event) => {
    event.preventDefault();

    try {
      const res = axios.post("auth/login", {
        username: username,
        password: password,
      });
      if (res.statusCode === 200) {
        console.log("success", res);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
        <form className="form-box" action="" onSubmit={loginFormSubmitHandler}>
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
