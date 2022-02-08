import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form1 from "../Forms/ProfileForm/Form1.js";
import Form2 from "../Forms/ProfileForm/Form2.js";
import Form3 from "../Forms/ProfileForm/Form3.js";
import Form4 from "../Forms/ProfileForm/Form4.js";
import ImageForm from "../Forms/ProfileForm/ImageForm.js";
import GoToTop from "../GoToTop.js";
import Model from "./Model.js";

import {
  DetailsFlex,
  DetailsFlex1,
  DetailsFromDb,
  DetailsTitles,
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
  const [personalForm, setPersonalForm] = useState(false);
  const [accountForm, setAccountForm] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState(false);
  const [deleteAccountForm, setDeleteAccountForm] = useState(false);
  const [changeImageForm, setChangeImageForm] = useState(false);
  const [traineeDetails, setTraineeDetails] = useState([]);
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
      const res = await axios.get(`/trainee/details/get/${user?.id}`, {
        headers: { authorization: "Bearer " + token },
      });
      setTraineeDetails(res.data);
    };
    onImageGetHandler();
  }, [user.id, token]);
  const PF = "http://localhost:5000/images/";

  return (
    <TraineeSect>
      <TraineeWrapper>
        <TraineeFlex>
          <TraineeLeftCol>
            <h1>Update Your details Here</h1>
            <TraineeUl>
              <TraineeLi onClick={showPersonalForm}>Personal Details</TraineeLi>
              <TraineeLi onClick={showAccountForm}>Account</TraineeLi>
              <TraineeLi onClick={showImageForm}>
                Change Profile Picture
              </TraineeLi>
              <TraineeLi onClick={showPasswordForm}>Change Password</TraineeLi>
              <TraineeLi>Your courses</TraineeLi>
              <TraineeLi onClick={showDeleteAccount}>Delete Account</TraineeLi>
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
            </TraineeUl>
          </TraineeLeftCol>
          <TraineeRightCol>
            {traineeDetails?.map((trainee) => (
              <div key={trainee.trainee_id}>
                <ImgBox>
                  <div>
                    <TraineeTitle>
                      {user.firstname + " " + user.lastname}
                    </TraineeTitle>
                    <TraineeRole>
                      <b>Role : </b> {user.type}
                    </TraineeRole>
                  </div>
                  <Img src={PF + trainee.trainee_image} />
                </ImgBox>
                <DetailsFlex>
                  <DetailsFlex1>
                    <DetailsTitles>Your Email : </DetailsTitles>
                    <DetailsFromDb>{trainee.trainee_email}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Your Mobile : </DetailsTitles>
                    <DetailsFromDb>{trainee.trainee_mobile}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Date Of Birth : </DetailsTitles>
                    <DetailsFromDb>
                      {new Date(trainee.trainee_dob).toLocaleDateString()}
                    </DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Experience : </DetailsTitles>
                    <DetailsFromDb>
                      {trainee.trainee_experience} Year's
                    </DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Education : </DetailsTitles>
                    <DetailsFromDb>{trainee.trainee_education}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Profession : </DetailsTitles>
                    <DetailsFromDb>{trainee.trainee_profession}</DetailsFromDb>
                  </DetailsFlex1>
                  <DetailsFlex1>
                    <DetailsTitles>Address : </DetailsTitles>
                    <DetailsFromDb>{trainee.trainee_address}</DetailsFromDb>
                  </DetailsFlex1>
                </DetailsFlex>
              </div>
            ))}
          </TraineeRightCol>
        </TraineeFlex>
      </TraineeWrapper>
      <GoToTop />
    </TraineeSect>
  );
};

export default Trainee;
