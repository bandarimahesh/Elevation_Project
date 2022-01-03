import React from "react";
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

const Form2 = () => {
  return (
    <>
      <FormDiv>
        <Form>
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
