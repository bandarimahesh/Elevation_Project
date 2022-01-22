import React, { useState } from "react";
import {
  Form,
  FormBtn,
  FormDiv,
  FormInput,
  PasswordDiv,
} from "./FormProfileElements";
import axios from "axios";
import { useSelector } from "react-redux";
const Form3 = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  const onChangePasswordHandler = async (event) => {
    event.preventDefault();
    if (newPassword !== retypePassword) {
      return setError("The password must matched");
    }
    try {
      const res = await axios.put(
        `/auth/change-password/${user?.id}`,
        {
          password: newPassword,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        setError("");
      }
      if (res.data.error) {
        setError(res.data.error);
        setSuccess("");
      }
    } catch (error) {}
  };
  setTimeout(() => {
    setError("");
    setSuccess("");
  }, 5000);
  return (
    <>
      <FormDiv>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Form onSubmit={onChangePasswordHandler}>
          <FormInput
            required
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your New Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
          />
          <PasswordDiv>
            <ul>
              <li>Minimum eight letter, Maximum 16</li>
              <li>One Uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One Number and Special characters</li>
            </ul>
          </PasswordDiv>
          <FormInput
            required
            type="password"
            onChange={(e) => setRetypePassword(e.target.value)}
            placeholder="Retype your new Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
          />
          {/* <FormInput type="password" placeholder="Retype Password" /> */}
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form3;
