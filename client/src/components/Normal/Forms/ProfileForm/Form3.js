import React from "react";
import { Form, FormBtn, FormDiv, FormInput } from "./FormProfileElements";

const Form3 = () => {
  return (
    <>
      <FormDiv>
        <Form>
          <FormInput type="password" placeholder="Enter your Old Password" />
          <FormInput type="password" placeholder="Enter your New Password" />
          <FormInput type="password" placeholder="Retype Password" />
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form3;
