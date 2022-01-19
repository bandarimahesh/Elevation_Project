import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, FormBtn, FormDiv, FormInput } from "./FormProfileElements";
import axios from "axios";
const Form2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  const changePersonalDetails = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.patch(
        `/api/profile/account/${user?.id}`,
        { firstName: firstName, lastName: lastName },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <FormDiv>
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
