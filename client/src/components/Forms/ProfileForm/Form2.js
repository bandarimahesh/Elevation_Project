import React from "react";
import { useSelector } from "react-redux";
import {
  Form,
  FormAddress,
  FormBtn,
  FormDiv,
  FormFlex,
  FormInput,
  FormInputDate,
  FormLabel,
} from "./FormProfileElements";
import axios from "axios";
const Form2 = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  console.log(token);
  const changePersonalDetails = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(`/api/profile`, {
        headers: { authorization: "Bearer " + token },
      });
      console.log(result.data);
    } catch (error) {}
  };
  return (
    <>
      <FormDiv>
        <Form onSubmit={changePersonalDetails}>
          <FormInput type="text" placeholder="Enter your First Name" />
          <FormInput type="text" placeholder="Enter your Last Name" />
          <FormInput type="number" placeholder="Enter your Mobile Name" />
          <FormFlex>
            <FormLabel htmlFor="">Enter your Dob :</FormLabel>
            <FormInputDate type="date" />
          </FormFlex>
          <FormAddress>Enter your address</FormAddress>

          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form2;
