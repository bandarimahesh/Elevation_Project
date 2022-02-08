import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form1 from "../../Forms/ProfileForm/Form1";
import Form2 from "../../Forms/ProfileForm/Form2.js";
import Form3 from "../../Forms/ProfileForm/Form3.js";
import Form4 from "../../Forms/ProfileForm/Form4.js";
import ImageForm from "../../Forms/ProfileForm/ImageForm.js";
import GoToTop from "../../GoToTop.js";
import Model from "./Model";

import {
  DetailsFlex,
  DetailsFlex1,
  DetailsFromDb,
  DetailsTitles,
  Img,
  ImgBox,
  TrainerFlex,
  TrainerLeftCol,
  TrainerLi,
  TrainerRightCol,
  TrainerRole,
  TrainerSect,
  TrainerTitle,
  TrainerUl,
  TrainerWrapper,
} from "./TrainerProfileFormElements.js";

const Trainer = () => {
  const [personalForm, setPersonalForm] = useState(false);
  const [accountForm, setAccountForm] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState(false);
  const [deleteAccountForm, setDeleteAccountForm] = useState(false);
  const [changeImageForm, setChangeImageForm] = useState(false);
  const [TrainerDetails, setTrainerDetails] = useState([]);
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
  

  const PF = "http://localhost:5000/images/";

  return (
    <TrainerSect>
      <TrainerWrapper>
        <TrainerFlex>
          <TrainerLeftCol>
            <h1>Update Your details Here</h1>
            <TrainerUl>
              <TrainerLi onClick={showPersonalForm}>Personal Details</TrainerLi>
              <TrainerLi onClick={showAccountForm}>Account</TrainerLi>
              <TrainerLi onClick={showImageForm}>
                Change Profile Picture
              </TrainerLi>
              <TrainerLi onClick={showPasswordForm}>Change Password</TrainerLi>
              <TrainerLi>Your courses</TrainerLi>
              <TrainerLi onClick={showDeleteAccount}>Delete Account</TrainerLi>
              {personalForm ? (
                <Model>
                  <Form1 personal={showPersonalForm} />
                </Model>
              ) : (
                ""
              )}
              {accountForm ? (
                <Model>
                  <Form2 personal={showAccountForm} />
                </Model>
              ) : (
                ""
              )}
              {changePasswordForm ? (
                <Model>
                  <Form3 personal={showPasswordForm} />
                </Model>
              ) : (
                ""
              )}
              {deleteAccountForm ? (
                <Model>
                  <Form4 personal={showDeleteAccount} />
                </Model>
              ) : (
                ""
              )}
              {changeImageForm ? (
                <Model>
                  <ImageForm personal={showImageForm} />
                </Model>
              ) : (
                ""
              )}
            </TrainerUl>
          </TrainerLeftCol>

          <TrainerRightCol>
            {TrainerDetails?.map((Trainer) => (
              <>
                <ImgBox>
                  <div>
                    <TrainerTitle>
                      {user.firstname + " " + user.lastname}
                    </TrainerTitle>
                    <TrainerRole>
                      <b>Role : </b> {user.type}
                    </TrainerRole>
                  </div>
                  <Img src={PF + Trainer.Trainer_image} />
                </ImgBox>
                <DetailsFlex>
                  <DetailsFlex1>
                    <DetailsTitles>Your Email : </DetailsTitles>
                    <DetailsFromDb>{Trainer.Trainer_email}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Your Mobile : </DetailsTitles>
                    <DetailsFromDb>{Trainer.Trainer_mobile}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Date Of Birth : </DetailsTitles>
                    <DetailsFromDb>
                      {new Date(Trainer.Trainer_dob).toLocaleDateString()}
                    </DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Experience : </DetailsTitles>
                    <DetailsFromDb>
                      {Trainer.Trainer_experience} Year's
                    </DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Education : </DetailsTitles>
                    <DetailsFromDb>{Trainer.Trainer_education}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Profession : </DetailsTitles>
                    <DetailsFromDb>{Trainer.Trainer_profession}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Address : </DetailsTitles>
                    <DetailsFromDb>{Trainer.Trainer_address}</DetailsFromDb>
                  </DetailsFlex1>
                </DetailsFlex>
              </>
            ))}
          </TrainerRightCol>
        </TrainerFlex>
      </TrainerWrapper>
      <GoToTop />
    </TrainerSect>
  );
};

export default Trainer;
