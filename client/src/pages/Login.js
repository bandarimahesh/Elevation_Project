import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();

    try {
      const res = axios.post("auth/login", {
        username: username,
        password: password,
        type: type,
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
      <div class="container shadow min-vh-80 py-2 mt-3">
        <h1 align="center">Sign In</h1>
        <form class="row g-3">
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-12">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="inputPassword4"
            />
          </div>

          <div class="col-12">
            <label for="inputState" class="form-label">
              Choose
            </label>
            <select
              id="inputState"
              class="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Choose a below option</option>
              <option value="student">Student</option>
              <option value="trainer">Trainer</option>
              <option value="hire">Hire</option>
            </select>
          </div>
          <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={loginFormSubmitHandler}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
