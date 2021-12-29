import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [graduate, setGraduate] = useState("");
  const [profession, setProfession] = useState("");
  const [formShow, setFormShow] = useState(false);
  const profileSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("users/profile/update", {
        username: username,
        email: email,
        mobile: mobile,
        dob: dob,
        address: address,
        experience: experience,
        graduate: graduate,
        profession: profession,
      });
      console.log(res.data);
      res && window.location.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const formShowHandler = (event) => {
    setFormShow((prevState) => {
      return !prevState;
    });
  };
  return (
    <React.Fragment>
      <div class="container shadow min-vh-80 py-2 mt-3">
        <h1 align="center">Profile Page</h1>
        <button
          align="center"
          type="button"
          class="btn btn-lg btn-primary"
          onClick={formShowHandler}
        >
          Update Profile
        </button>
        {formShow && (
          <form class="row g-3">
            <div class="col-12">
              <label for="inputEmail4" class="form-label">
                Username
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
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="inputAddress"
              />
            </div>
            <div class="col-6">
              <label for="inputPassword4" class="form-label">
                Mobile
              </label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                type="number"
                class="form-control"
                id="inputAddress"
              />
            </div>
            <div class="col-6">
              <label for="inputPassword4" class="form-label">
                Date Of Birth
              </label>
              <input
                onChange={(e) => setDob(e.target.value)}
                type="date"
                class="form-control"
                id="inputAddress"
                min="1-1-1970"
              />
            </div>
            <div class="col-6">
              <label for="inputPassword4" class="form-label">
                Experience in Years
              </label>
              <input
                onChange={(e) => setExperience(e.target.value)}
                type="number"
                class="form-control"
                id="inputAddress"
                min="0"
                max="100"
              />
            </div>
            <div class="col-6">
              <label for="inputState" class="form-label">
                Education
              </label>
              <select
                id="inputState"
                class="form-select"
                value={graduate}
                onChange={(e) => setGraduate(e.target.value)}
              >
                <option>Choose a below option</option>
                <option value="1">Pursing</option>
                <option value="2">Under Graduate</option>
                <option value="3">Graduate</option>
                <option value="4">Post Graduate</option>
              </select>
            </div>
            <div class="col-12">
              <label for="inputState" class="form-label">
                Profession
              </label>
              <select
                id="inputState"
                class="form-select"
                value={graduate}
                onChange={(e) => setProfession(e.target.value)}
              >
                <option>Choose a below option</option>
                <option value="graduation">Completed the graduation</option>
                <option value="trainer">Looking for a trainer</option>
                <option value="job">Seeking for a job</option>
                <option value="skills">Learning a new skills</option>
              </select>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              <label for="floatingTextarea2">Enter your address</label>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Choose your Picture
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="col-12">
              <button
                onClick={profileSubmitHandler}
                type="submit"
                class="btn btn-primary"
              >
                Update Profile
              </button>
            </div>
          </form>
        )}
      </div>
    </React.Fragment>
  );
};

export default Register;
