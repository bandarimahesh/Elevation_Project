import React, { useState, useContext } from "react";
import { Form, FormBtn, FormDiv, FormInput } from "./FormProfileElements";
import { Context } from "../../../context/Context";
import axios from "axios";
const Form3 = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { user } = useContext(Context);
  const token = user?.accessToken;

  const onChangePasswordHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.put(
        `/auth/change-password/${user?.id}`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <FormDiv>
        <Form onSubmit={onChangePasswordHandler}>
          <FormInput
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter your Old Password"
          />
          <FormInput
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your New Password"
          />
          {/* <FormInput type="password" placeholder="Retype Password" /> */}
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form3;
