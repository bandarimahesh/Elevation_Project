import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  Wrapper,
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
  SlideDiv1,
  SlideDiv2,
  SlideDiv3,
  SlideDiv4,
  PwdField,
  PwdIcons,
  ShowIcon,
  HideIcon,
  HomeSectionComponent,
  LoginWrapper,
} from "./LoginFormElements";
import StudentImg from "../../../images/student-rm.png";
import TraineeImg from "../../../images/trainer-rm.png";
import HireImg from "../../../images/hire-rm.png";
import TrainerImg from "../../../images/trainee-rm.png";
import GoToTop from "../../GoToTop.js";
// import jwtDecode from "jwt-decode";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../redux/userRedux";
import { useParams } from "react-router-dom";
const HomeSection = () => {
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("trainee");
  const [error, setError] = useState("");
  const [wrongPwd, setWrongPwd] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const activateEmailAccount = async () => {
      try {
        const res = await axios.post(
          `/auth/email-account-activate/${params.id}`,
          { signUpToken: params.id }
        );
        if (res.data.token) {
          setError(res.data.token);
          // navigate(`/login`);
        }
        if (res.data.success) {
          setSuccess(res.data.success);
        }
        if (res.data.error) {
          setError(res.data.error);
          // navigate(`/login`);
        }
      } catch (error) {
        return;
      }
    };
    activateEmailAccount();
  }, [params.id]);

  // refresh token function for
  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post(
  //       "/auth/login",
  //       {
  //         headers: { authorization: "Bearer " + token },
  //       },
  //       (err, data) => {
  //         if (err) {
  //           console.log(err.message);
  //         }
  //       }
  //     );
  //     if (res.data) {
  //       console.log(res.data);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // axios.interceptors.request.use(async (config) => {
  //   let currentDate = new Date();
  //   const decodedToken = jwtDecode(user?.accessToken);
  //   if (decodedToken.exp * 1000 < currentDate.getTime) {
  //     await refreshToken();
  //   }
  // });

  // login function handler
  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    const res = await axios.post(
      "/auth/login",
      {
        username: email,
        password: password,
        type: type,
      },
      (err, data) => {
        if (err) {
          return;
        }
      }
    );
    if (res.data.success) {
      dispatch(loginSuccess(res.data.success));
      const userType = res.data.success.type;
      navigate(`/${userType}`);
    }

    if (res.data.notFound) {
      dispatch(loginFailure(res.data.notFound));
      setError(res.data.notFound);
      setWrongPwd("");
      // navigate(`/login`);
    }
    if (res.data.wrong) {
      dispatch(loginFailure(res.data.wrong));
      setWrongPwd(res.data.wrong);
      setError("");
      // navigate(`/login`);
    }
  };
  setTimeout(() => {
    setError("");
    setWrongPwd("");
  }, 7000);

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
    <HomeSectionComponent>
      <LoginWrapper>
        <Wrapper>
          <WrapperRight>
            <WrapperRightImg src={StudentImg} />
            <WrapperRightImg src={TraineeImg} />
          </WrapperRight>
          <WrapperCenter>
            {success && <p style={{ color: "green" }}>{success}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {wrongPwd && <p style={{ color: "red" }}>{wrongPwd}</p>}
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
                  value="jobseeker"
                  isActive3={isActive3}
                  onClick={isActiveToggle3}
                >
                  Job-Seeker
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
                      value={email}
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Field>
                  <PwdField>
                    <Input
                      required
                      value={password}
                      type={showIcon ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <PwdIcons onClick={(e) => setShowIcon(!showIcon)}>
                      {showIcon ? <ShowIcon /> : <HideIcon />}
                    </PwdIcons>
                  </PwdField>
                  <PassLink>
                    <PassLinkA>
                      <Link
                        to="/forgot-password"
                        style={{ textDecoration: "none", color: "#fa4299" }}
                      >
                        Forgot Password ?
                      </Link>
                    </PassLinkA>
                  </PassLink>
                  <Field>
                    <InputButton
                      type="submit"
                      disabled={!email || !password || !type}
                    >
                      Login
                    </InputButton>
                  </Field>
                  <SignUpLink>
                    Not a Member yet ?
                    <Link to={`/register`} style={{ textDecoration: "none" }}>
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
      </LoginWrapper>
      <GoToTop />
    </HomeSectionComponent>
  );
};

export default HomeSection;
