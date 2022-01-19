import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form1 from "../Forms/ProfileForm/Form1.js";
import Form2 from "../Forms/ProfileForm/Form2.js";
import Form3 from "../Forms/ProfileForm/Form3.js";
import Form4 from "../Forms/ProfileForm/Form4.js";

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
  const [resUser, setResUser] = useState();

  const user = useSelector((state) => state.user.currentUser);

  const token = user?.accessToken;
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
  
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`/trainee/details/${user?.id}`, {
          headers: { authorization: "Bearer " + token },
        });
        setResUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserData();
  }, [token, user.id]);
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
