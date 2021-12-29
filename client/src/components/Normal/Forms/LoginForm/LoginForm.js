import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../../context/Context";
import {
  HomeSectionComponent,
  HomeWrapper,
  Wrapper,
  LeftCol,
  RightCol,
  TitleText,
  FormContainer,
  FormInner,
  Form,
  Field,
  Input,
  InputButton,
  PassLink,
  PassLinkA,
  SignUpLink,
  SignLinkB,
  SlideControls,
  SlideTab,
  SlideLabel,
  InputRadioButton,
  WrapperCenter,
  WrapperRight,
  WrapperLeft,
  WrapperRightImg,
  WrapperLeftImg,
  HomeSect,
} from "./LoginFormElements";
import StudentImg from "../../../../images/student.png";
import TraineeImg from "../../../../images/train.png";
import HireImg from "../../../../images/hire.png";
import TrainerImg from "../../../../images/trainer.png";
const HomeSection = () => {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login function handler
  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "/auth/login",
        {
          username: username,
          password: password,
        },
        (err, data) => {
          if (err) {
            console.log(err.message);
          }
          if (data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            console.log("Successfully logged in", res.data);
          }
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // res.data && window.location.replace("/profile");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(error.message);
    }
  };
  console.log(user);
  return (
    <HomeSect>
      <HomeSectionComponent>
        <HomeWrapper>
          <LeftCol></LeftCol>
          <RightCol>
            <Wrapper>
              <WrapperRight>
                <WrapperRightImg src={StudentImg} />
                <WrapperRightImg src={TraineeImg} />
              </WrapperRight>
              <WrapperCenter>
                <TitleText></TitleText>
                <FormContainer>
                  <SlideControls>
                    <InputRadioButton />
                    <InputRadioButton />
                    <InputRadioButton />
                    <InputRadioButton />
                    <SlideLabel>Student</SlideLabel>
                    <SlideLabel>Trainer</SlideLabel>
                    <SlideLabel>Trainee</SlideLabel>
                    <SlideLabel>Hire</SlideLabel>
                    <SlideTab />
                  </SlideControls>
                  <FormInner>
                    <Form onSubmit={loginFormSubmitHandler}>
                      <Field>
                        <Input
                          required
                          type="text"
                          placeholder="Enter your username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Field>
                      <Field>
                        <Input
                          required
                          type="text"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Field>
                      <PassLink>
                        <PassLinkA>Forgot Password ?</PassLinkA>
                      </PassLink>
                      <Field>
                        <InputButton type="submit" value="Login" />
                      </Field>
                      <SignUpLink>
                        Not a Member yet ?
                        <Link
                          to={`/register`}
                          style={{ textDecoration: "none" }}
                        >
                          <SignLinkB> Sign up Right now</SignLinkB>
                        </Link>
                      </SignUpLink>
                    </Form>
                  </FormInner>
                </FormContainer>
              </WrapperCenter>
              <WrapperLeft>
                <WrapperLeftImg />
                <WrapperRightImg src={TrainerImg} />
                <WrapperRightImg src={HireImg} />
              </WrapperLeft>
            </Wrapper>
          </RightCol>
          <LeftCol></LeftCol>
        </HomeWrapper>
      </HomeSectionComponent>
    </HomeSect>
  );
};

export default HomeSection;
