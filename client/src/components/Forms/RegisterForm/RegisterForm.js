import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  RegisterFormSect,
  RegisterFormSection,
  RegisterFormWrapper,
  FormInner,
  Form,
  Field,
  Input,
  InputButton,
  SignUpLink,
  SignLinkB,
  FormLabel,
  FormSelect,
  FormOption,
  FormInput,
  FormLabelDiv,
  PasswordDiv,
} from "./RegisterFormElements";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const registerSubmitHandler = async (event) => {
    event.preventDefault();
    // http:localhost:5000/api/auth/register
    try {
      const res = await axios.post("/auth/register", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        type: type,
      });
      if (res.data.required) {
        setError(res.data.required);
      }
      if (res.data.exists) {
        setError(res.data.exists);
      }
      if (res.data.error) {
        setError(res.data.error);
      }
      if (res.data.success) {
        setSuccess(res.data.success);
      }
      setEmail("");
      setPassword("");
      setType("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.log(error.message);
    }
  };
  setTimeout(() => {
    setError("");
  }, 4000);
  return (
    <React.Fragment>
      <RegisterFormSect>
        <RegisterFormSection>
          <RegisterFormWrapper>
            <FormInner>
              <Form onSubmit={registerSubmitHandler}>
                {success && <p style={{ color: "green" }}>{success}</p>}
                {error ? <p style={{ color: "red" }}>{error}</p> : null}
                <Field>
                  <Input
                    value={email}
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <Input
                    value={firstName}
                    required
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Field>
                <Field>
                  <Input
                    required
                    value={lastName}
                    type="text"
                    placeholder="Enter your Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Field>
                <Field>
                  <Input
                    value={password}
                    required={true}
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
                  />
                </Field>
                <PasswordDiv>
                  <ul>
                    <li>Minimum eight letter, Maximum 16</li>
                    <li>One Uppercase letter</li>
                    <li>One lowercase letter</li>
                    <li>One Number and Special characters</li>
                  </ul>
                </PasswordDiv>

                <Field>
                  <FormLabel>Choose One Option </FormLabel>
                  <FormSelect
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <FormOption>Choose a below option</FormOption>
                    <FormOption value="trainee">Trainee</FormOption>
                    <FormOption value="trainer">Trainer</FormOption>
                    <FormOption value="job-seeker">Job Seeker</FormOption>
                    <FormOption value="recruiter">Recruiter</FormOption>
                  </FormSelect>
                </Field>
                <FormLabelDiv>
                  <FormInput type="checkbox" required />
                  <FormLabel>I have read all Terms & Conditions.</FormLabel>
                </FormLabelDiv>
                <Field>
                  <InputButton type="submit" value="Register" />
                </Field>
                <SignUpLink>
                  Have An account ?
                  <Link to={`/login`} style={{ textDecoration: "none" }}>
                    <SignLinkB> Sign in Right now</SignLinkB>
                  </Link>
                </SignUpLink>
              </Form>
            </FormInner>
          </RegisterFormWrapper>
        </RegisterFormSection>
      </RegisterFormSect>
    </React.Fragment>
  );
};

export default RegisterForm;
