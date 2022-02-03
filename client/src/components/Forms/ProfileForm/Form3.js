import React, { useState } from "react";
import {
  Form,
  FormBtn,
  FormDiv,
  FormInput,
  HideIcon,
  PasswordDiv,
  PwdField,
  PwdIcons,
  ShowIcon,
} from "./FormProfileElements";
import axios from "axios";
import { useSelector } from "react-redux";
const Form3 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  let pwdMinCharLen = password.length >= 8;
  let pwdHasLowChar = /(.*?[a-z].*)/.test(password);
  let pwdHasCapChar = /(?=.*?[A-Z].*)/.test(password);
  let pwdHasSplChar = /(?=.*?[#?!@$%^&*-].*)/.test(password);
  let pwdHasNumChar = /(?=.*?[0-9].*)/.test(password);
  let pwdMaxCharLen = password.length <= 16;

  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  const onChangePasswordHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return setError("The password must matched");
    }
    try {
      const res = await axios.put(
        `/auth/change-password/${user?.id}`,
        {
          password: password,
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
          <PwdField>
            <FormInput
              value={password}
              required={true}
              type={showIcon ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
            />
            <PwdIcons onClick={(e) => setShowIcon(!showIcon)}>
              {showIcon ? <ShowIcon /> : <HideIcon />}
            </PwdIcons>
          </PwdField>
          {password && (
            <PasswordDiv>
              {pwdMinCharLen && pwdMaxCharLen ? (
                <p style={{ color: "green" }}>
                  Password is between 8 and 16 characters
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  Password must more than 8 and less than 16
                </p>
              )}
              {pwdHasLowChar ? (
                <p style={{ color: "green" }}>
                  Password contains small letters
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  Password must be contain small letters
                </p>
              )}
              {pwdHasCapChar ? (
                <p style={{ color: "green" }}>
                  Password contains capital letters
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  Password must be contain capital letters
                </p>
              )}
              {pwdHasSplChar ? (
                <p style={{ color: "green" }}>
                  Password contains Special characters
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  Password must be contain Special characters
                </p>
              )}
              {pwdHasNumChar ? (
                <p style={{ color: "green" }}>Password contains Numbers</p>
              ) : (
                <p style={{ color: "red" }}>
                  Password must be at lease one number
                </p>
              )}
            </PasswordDiv>
          )}
          <PwdField>
            <FormInput
              value={confirmPassword}
              required={true}
              type={showIcons ? "text" : "password"}
              placeholder="Confirm Your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <PwdIcons onClick={() => setShowIcons(!showIcons)}>
              {showIcons ? <ShowIcon /> : <HideIcon />}
            </PwdIcons>
          </PwdField>

          {password && confirmPassword && (
            <PasswordDiv>
              {password !== confirmPassword ? (
                <p style={{ color: "red" }}>Password does not match</p>
              ) : (
                <p style={{ color: "green" }}>Password matched</p>
              )}
            </PasswordDiv>
          )}
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form3;
