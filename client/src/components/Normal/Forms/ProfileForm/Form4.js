import React from "react";
import { Form, FormAddress, FormBtn, FormDiv } from "./FormProfileElements";

const Form4 = () => {
  return (
    <>
      <FormDiv>
        <Form>
          <h1>
            Once you clicked on delete account you will lost all your data and
            courses that you purchased.
          </h1>
          <FormAddress>Enter your feedback</FormAddress>

          <FormBtn>Delete Account</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form4;
