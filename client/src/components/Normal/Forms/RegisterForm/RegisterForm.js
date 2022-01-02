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
} from "./RegisterFormElements";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const registerSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("auth/register", {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        type: type,
      });
      console.log(res.data);
      setResponse(res.data);
      // res.data && window.location.replace("/login");
      setLastName("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <React.Fragment>
      <RegisterFormSect>
        <RegisterFormSection>
          {response}
          <RegisterFormWrapper>
            <FormInner>
              <Form onSubmit={registerSubmitHandler}>
                <Field>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <Input
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
                    required
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Field>
                <Field>
                  <FormLabel>Choose : </FormLabel>
                  <FormSelect
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <FormOption>Choose a below option</FormOption>
                    <FormOption value="student">Student</FormOption>
                    <FormOption value="trainer">Trainer</FormOption>
                    <FormOption value="hire">Hire</FormOption>
                  </FormSelect>
                </Field>
                <FormLabelDiv>
                  <FormInput type="checkbox" required />
                  <FormLabel>I have read all Terms & Conditions.</FormLabel>
                </FormLabelDiv>
                <Field>
                  <InputButton type="submit" value="Login" />
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
