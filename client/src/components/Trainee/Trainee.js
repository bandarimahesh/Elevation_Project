import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form1 from "../Forms/ProfileForm/Form1.js";
import Form2 from "../Forms/ProfileForm/Form2.js";
import Form3 from "../Forms/ProfileForm/Form3.js";
import Form4 from "../Forms/ProfileForm/Form4.js";
import ImageForm from "../Forms/ProfileForm/ImageForm.js";

import {
  Img,
  ImgBox,
  TraineeFlex,
  TraineeLeftCol,
  TraineeLi,
  TraineeRightCol,
  TraineeRole,
  TraineeSect,
  TraineeTitle,
  TraineeUl,
  TraineeWrapper,
} from "./TraineeELements.js";

const Trainee = () => {
  const [personalForm, setPersonalForm] = useState(true);
  const [accountForm, setAccountForm] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState(false);
  const [deleteAccountForm, setDeleteAccountForm] = useState(false);
  const [changeImageForm, setChangeImageForm] = useState(false);
  const user = useSelector((state) => state.user.currentUser);

  const showPersonalForm = () => {
    setPersonalForm(!personalForm);
    setAccountForm(false);
    setChangePasswordForm(false);
    setDeleteAccountForm(false);
    setChangeImageForm(false);
  };
  const showAccountForm = () => {
    setAccountForm(!accountForm);
    setPersonalForm(false);
    setDeleteAccountForm(false);
    setChangePasswordForm(false);
    setChangeImageForm(false);
  };
  const showPasswordForm = () => {
    setChangePasswordForm(!changePasswordForm);
    setPersonalForm(false);
    setAccountForm(false);
    setDeleteAccountForm(false);
    setChangeImageForm(false);
  };
  const showDeleteAccount = () => {
    setAccountForm(false);
    setDeleteAccountForm(!deleteAccountForm);
    setPersonalForm(false);
    setChangePasswordForm(false);
    setChangeImageForm(false);
  };
  const showImageForm = () => {
    setChangeImageForm(!changeImageForm);
    setAccountForm(false);
    setDeleteAccountForm(false);
    setPersonalForm(false);
    setChangePasswordForm(false);
  };
  const token = user?.accessToken;
  useEffect(() => {
    const onImageGetHandler = async () => {
      const res = await axios.get(`/trainee/image/get/${user?.id}`, {
        headers: { authorization: "Bearer " + token },
      });
      console.log(res.data);
    };
    onImageGetHandler();
  }, [user.id, token]);
  const PF = "http://localhost:5000/images/header-home3.png";
  return (
    <TraineeSect>
      <TraineeWrapper>
        <TraineeFlex>
          <TraineeLeftCol>
            <ImgBox>
              <Img src={PF} />
              <TraineeTitle>
                {user.firstname + " " + user.lastname}
              </TraineeTitle>
              <TraineeRole>
                <b>Role : </b> {user.type}
              </TraineeRole>
            </ImgBox>
            <TraineeUl>
              <TraineeLi onClick={showPersonalForm}>Personal Details</TraineeLi>
              <TraineeLi onClick={showAccountForm}>Account</TraineeLi>
              <TraineeLi onClick={showImageForm}>
                Change Profile Picture
              </TraineeLi>
              <TraineeLi onClick={showPasswordForm}>Change Password</TraineeLi>

              <TraineeLi>Your courses</TraineeLi>
              <TraineeLi onClick={showDeleteAccount}>Delete Account</TraineeLi>
            </TraineeUl>
          </TraineeLeftCol>
          <TraineeRightCol>
            {personalForm ? <Form1 /> : ""}
            {accountForm ? <Form2 /> : ""}
            {changePasswordForm ? <Form3 /> : ""}
            {deleteAccountForm ? <Form4 /> : ""}
            {changeImageForm ? <ImageForm /> : ""}
          </TraineeRightCol>
        </TraineeFlex>
      </TraineeWrapper>
    </TraineeSect>
  );
};

export default Trainee;
