import React, { useState } from "react";
import {
  CloseButton,
  Form,
  FormBtn,
  FormDiv,
  ImageTitleChoose,
  ImgInput,
} from "./FormProfileElements";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import axios from "axios";
const ImageForm = (props) => {
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  console.log(user.type);
  const onImageUploadHandler = (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("image", image);

    const res = axios.put(`/trainee/image/upload/${user?.id}`, data, {
      headers: { authorization: "Bearer " + token },
    });
    if (res.data.success) {
      setSuccess(res.data.success);
      toast.success(res.data.success, {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <CloseButton onClick={props.personal} />
      <FormDiv>
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Form onSubmit={onImageUploadHandler} encType="multipart/form-data">
          <ImageTitleChoose>
            Choose Picture from your local storage
          </ImageTitleChoose>

          <ImgInput
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <FormBtn>Update</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default ImageForm;
