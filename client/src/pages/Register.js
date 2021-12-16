import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const registerSubmitHandler = (event) => {
    event.preventDefault();
    try {
      const res = axios.post("auth/register", {
        username: username,
        password: password,
      });
      if (res.statusCode === 200) {
        console.log("success", res);
        username("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="main">
        <div className="form__box">
          <form action="" onSubmit={registerSubmitHandler}>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
