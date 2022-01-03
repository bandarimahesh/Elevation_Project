import React, { useState } from "react";
import Form1 from "../Normal/Forms/ProfileForm/Form1.js";
import Form2 from "../Normal/Forms/ProfileForm/Form2.js";
import Form3 from "../Normal/Forms/ProfileForm/Form3.js";
import Form4 from "../Normal/Forms/ProfileForm/Form4.js";

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

  const showPersonalForm = () => {
    setPersonalForm(!personalForm);
    setAccountForm(false);
    setChangePasswordForm(false);
    setDeleteAccountForm(false);
  };
  const showAccountForm = () => {
    setAccountForm(!accountForm);
    setPersonalForm(false);
    setDeleteAccountForm(false);
    setPersonalForm(false);
  };
  const showPasswordForm = () => {
    setChangePasswordForm(!changePasswordForm);
    setPersonalForm(false);
    setAccountForm(false);
    setDeleteAccountForm(false);
  };
  const showDeleteAccount = () => {
    setAccountForm(false);
    setDeleteAccountForm(!deleteAccountForm);
    setPersonalForm(false);
    setChangePasswordForm(false);
  };

  return (
    <TraineeSect>
      <TraineeWrapper>
        <TraineeFlex>
          <TraineeLeftCol>
            <ImgBox>
              <Img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <TraineeTitle>Mahesh Bandari</TraineeTitle>
              <TraineeRole>
                <b>Role : </b> Trainee
              </TraineeRole>
            </ImgBox>
            <TraineeUl>
              <TraineeLi onClick={showPersonalForm}>Personal Details</TraineeLi>
              <TraineeLi onClick={showAccountForm}>Account</TraineeLi>
              <TraineeLi onClick={showPasswordForm}>Change Password</TraineeLi>
              <TraineeLi>Payment Methods</TraineeLi>
              <TraineeLi>Your courses</TraineeLi>
              <TraineeLi onClick={showDeleteAccount}>Delete Account</TraineeLi>
            </TraineeUl>
          </TraineeLeftCol>
          <TraineeRightCol>
            {personalForm ? <Form1 /> : ""}
            {accountForm ? <Form2 /> : ""}
            {changePasswordForm ? <Form3 /> : ""}
            {deleteAccountForm ? <Form4 /> : ""}
          </TraineeRightCol>
        </TraineeFlex>
      </TraineeWrapper>
    </TraineeSect>
  );
};

export default Trainee;
