import React, { useState } from "react";
import { Form, FormBtn, FormDiv, ImgInput } from "./FormProfileElements";
import { useSelector } from "react-redux";

import axios from "axios";
const ImageForm = () => {
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  const onImageUploadHandler = (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("image", image);
    const res = axios.put(`/trainee/image/upload/${user?.id}`, data, {
      headers: { authorization: "Bearer " + token },
    });
    if (res.data) {
      console.log(res.data);
    }
  };
  return (
    <>
      <FormDiv>
        <Form onSubmit={onImageUploadHandler} encType="multipart/form-data">
          <h1>Choose Picture from your local storage</h1>
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
