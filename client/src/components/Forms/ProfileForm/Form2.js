import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CloseButton,
  Form,
  FormBtn,
  FormDiv,
  FormInput,
} from "./FormProfileElements";
import { toast } from "react-toastify";

import axios from "axios";
const Form2 = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  const changePersonalDetails = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.put(
        `/trainee/profile/account/${user?.id}`,
        { firstName: firstName, lastName: lastName },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (result.data.success) {
        setSuccess(result.data.success);
        toast.success("Successfully update your personal details", {
          position: "top-center",
        });
      }
      if (result.data.error) {
        setError(result.data.error);
        toast.error("There was a problem updating your personal details", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <CloseButton onClick={props.personal} />
      <FormDiv>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Form onSubmit={changePersonalDetails}>
          <FormInput
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Enter your First Name"
          />
          <FormInput
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Enter your Last Name"
          />
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form2;
