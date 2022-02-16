import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
const Field = styled.div`
  height: auto;
  width: 100%;
  margin: 20px;
`;
const FormLabel = styled.label`
  font-size: 20px;
  margin: 10px auto;
  width: 100%;
  display: block;
`;
const CloseButton = styled(AiOutlineClose)`
  font-size: 25px;
  color: #111;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 16px;
`;
const Form = styled.form`
  width: 600px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
const Input = styled.input`
  height: 40px;
  width: 50%;
  margin: 0 auto;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  padding: 5px;

  &:focus {
    border-color: #fc83bb;
  }
`;
const NextButton = styled.button`
  height: 40px;
  outline: none;
  margin-top: 10px;
  font-size: 17px;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  padding-left: 0;
  border: none;
  cursor: pointer;
  margin-left: 17px;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  &:disabled {
    cursor: not-allowed;
  }
`;
const TrainerImageForm = (props) => {
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  console.log(user.type);
  const onImageUploadHandler = (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("image", image);

    const res = axios.put(`/trainer/profile/update/image/${user?.id}`, data, {
      headers: { authorization: "Bearer " + token },
    });
    if (res.data) {
      setSuccess(res.data);
      console.log(res.data);
    }
  };
  return (
    <>
      <CloseButton onClick={props.personal} />
      <FormDiv>
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Form onSubmit={onImageUploadHandler} encType="multipart/form-data">
          <Field>
            <FormLabel>Choose Your Picture :</FormLabel>
            <Input
              required
              type="file"
              name="image"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </Field>
          <NextButton>Update</NextButton>
        </Form>
      </FormDiv>
    </>
  );
};

export default TrainerImageForm;
