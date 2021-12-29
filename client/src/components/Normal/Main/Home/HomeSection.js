import React, { useState } from "react";
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
} from "./HomeSectElements";
import StudentImg from "../../../../images/student.png";
import TraineeImg from "../../../../images/train.png";
import HireImg from "../../../../images/hire.png";
import TrainerImg from "../../../../images/trainer.png";
const HomeSection = () => {
  const [isActive, setIsActive] = useState(true);

  const addSlideTabStyles = () => {
    setIsActive(!isActive);
    console.log("clicked");
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
                    <InputRadioButton />
                    <InputRadioButton />
                    <InputRadioButton />
                    <InputRadioButton />
                    <SlideLabel isActive={isActive} onClick={addSlideTabStyles}>
                      Student
                    </SlideLabel>
                    <SlideLabel isActive={isActive} onClick={addSlideTabStyles}>
                      Trainer
                    </SlideLabel>
                    <SlideLabel isActive={isActive} onClick={addSlideTabStyles}>
                      Trainee
                    </SlideLabel>
                    <SlideLabel isActive={isActive} onClick={addSlideTabStyles}>
                      Hire
                    </SlideLabel>
                    <SlideTab />
                  </SlideControls>
                  <FormInner>
                    <Form>
                      <Field>
                        <Input type="text" placeholder="Enter your username" />
                      </Field>
                      <Field>
                        <Input type="text" placeholder="Enter your password" />
                      </Field>
                      <PassLink>
                        <PassLinkA>Forgot Password ?</PassLinkA>
                      </PassLink>
                      <Field>
                        <InputButton type="submit" value="Login" />
                      </Field>
                      <SignUpLink>
                        Not a Member yet ?
                        <SignLinkB> Sign up Right now</SignLinkB>
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
