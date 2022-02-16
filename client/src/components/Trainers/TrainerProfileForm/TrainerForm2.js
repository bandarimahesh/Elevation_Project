import axios from "axios";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
const CloseButton = styled(AiOutlineClose)`
  font-size: 25px;
  color: #111;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 16px;
`;
const FormDiv = styled.div`
  padding: 50px;
  margin-left: 20px;
  @media only screen and (max-width: 868px) {
    padding: 30px 20px;
    margin-left: 0px;
  }
  @media only screen and (max-width: 468px) {
    padding: 20px 10px;
    margin-left: 0px;
  }
`;
const Form = styled.form``;
const FormInput = styled.input`
  display: block;
  width: 90%;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 19px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #111;
  &::placeholder {
    color: #111;
    opacity: 0.9;
  }
`;
const FormBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px 30px;
  margin-top: 20px;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
const TrainerForm2 = (props) => {
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
        `/trainer/profile/update/${user?.id}`,
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
            required
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Enter your First Name"
          />
          <FormInput
            required
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

export default TrainerForm2;
