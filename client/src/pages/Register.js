import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");

  const registerSubmitHandler = (event) => {
    event.preventDefault();

    try {
      const res = axios.post("auth/register", {
        username: username,
        firstName: firstName,
        lastName: lastName,
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
  useEffect(() => {
    const registerUser = async (data) => {};
    registerUser();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div class="container shadow min-vh-80 py-2 mt-3">
        <h1 align="center">Sign Up</h1>
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
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              class="form-control"
              id="inputAddress"
            />
          </div>
          <div class="col-12">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              class="form-control"
              id="inputAddress"
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
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                I have read all Terms & Conditions.
              </label>
            </div>
          </div>
          <div class="col-12">
            <button
              onClick={registerSubmitHandler}
              type="submit"
              class="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
