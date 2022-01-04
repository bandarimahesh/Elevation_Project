import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../context/Context";
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
  WrapperCenter,
  WrapperRight,
  WrapperLeft,
  WrapperRightImg,
  WrapperLeftImg,
  HomeSect,
  SlideDiv1,
  SlideDiv2,
  SlideDiv3,
  SlideDiv4,
} from "./LoginFormElements";
import StudentImg from "../../../images/student.png";
import TraineeImg from "../../../images/train.png";
import HireImg from "../../../images/hire.png";
import TrainerImg from "../../../images/trainer.png";

const HomeSection = () => {
  const { dispatch } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("trainee");
  const navigate = useNavigate();
  // login function handler
  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "/auth/login",
        {
          username: email,
          password: password,
          type: type,
        },
        (err, data) => {
          if (err) {
            console.log(err.message);
          }
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data);
      navigate(`/${res.data.type}`);
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(error.message);
    }
  };
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const isActiveToggle1 = (e) => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    const name = e.target.innerHTML;
    setType(name.toLowerCase());
  };

  const isActiveToggle2 = (e) => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    const name = e.target.innerHTML;
    setType(name.toLowerCase());
  };
  const isActiveToggle3 = (e) => {
    setIsActive3(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive4(false);
    const name = e.target.innerHTML;
    setType(name.toLowerCase());
  };
  const isActiveToggle4 = (e) => {
    setIsActive4(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive3(false);
    const name = e.target.innerHTML;
    setType(name.toLowerCase());
  };
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
                    <SlideDiv1
                      value="trainee"
                      isActive1={isActive1}
                      onClick={isActiveToggle1}
                    >
                      Trainee
                    </SlideDiv1>
                    <SlideDiv2
                      value="trainer"
                      isActive2={isActive2}
                      onClick={isActiveToggle2}
                    >
                      Trainer
                    </SlideDiv2>
                    <SlideDiv3
                      value="job_seeker"
                      isActive3={isActive3}
                      onClick={isActiveToggle3}
                    >
                      Job Seeker
                    </SlideDiv3>
                    <SlideDiv4
                      value="hire"
                      isActive4={isActive4}
                      onClick={isActiveToggle4}
                    >
                      Recruiter
                    </SlideDiv4>
                  </SlideControls>
                  <FormInner>
                    <Form onSubmit={loginFormSubmitHandler}>
                      <Field>
                        <Input
                          required
                          type="text"
                          placeholder="Enter your email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Field>
                      <Field>
                        <Input
                          required={true}
                          type="text"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
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
