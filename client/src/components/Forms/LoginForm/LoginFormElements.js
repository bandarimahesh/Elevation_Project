import styled from "styled-components";
import { BiHide, BiShow } from "react-icons/bi";

export const HomeSect = styled.section`
  width: 100%;
  height: 100vh;
`;
export const HomeSectionComponent = styled.div`
  width: 90%;
  height: 95vh;
  margin: 0 auto;
  padding: 0 100px;
`;
export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftCol = styled.div`
  flex: 2;
`;
export const RightCol = styled.div`
  flex: 10;
  background-color: #fff;
`;
// right section

export const MainTitleBox = styled.div`
  margin: 200px 0 0 50px;
`;
export const MainTitle = styled.h1`
  color: #fff;
  font-size: 37px;
  font-weight: 700;
`;
export const MainDescription = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin: 30px auto;
`;
export const MainRegButton = styled.button`
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  padding: 13px 20px;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
`;

// left section
export const Wrapper = styled.div`
  margin-top: 100px;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;
export const WrapperRight = styled.div`
  flex: 2;
`;
export const WrapperRightImg = styled.img`
  width: 180px;
  height: 200px;
`;

export const WrapperLeftImg = styled.img``;
export const WrapperLeft = styled.div`
  flex: 2;
`;

export const WrapperCenter = styled.div`
  flex: 8;
  width: 560px;
  padding: 30px;
  height: 100%;
  border-radius: 5px;
  /* box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  margin: 0 auto;
`;
export const TitleText = styled.div`
  display: flex;
  width: 400%;
`;
export const Title = styled.div`
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`;
export const FormContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SlideControls = styled.div`
  position: relative;
  display: flex;
  height: 49px;
  width: 99.5%;
  margin: 30px 0 10px 0;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
`;
export const InputRadioButton = styled.input`
  display: none;
`;
export const SlideTab = styled.div`
  position: absolute;
  left: 0;
  border-radius: 5px;
  height: 100%;
  width: 25%;
  z-index: 0;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const SlideDiv1 = styled.div`
  height: 100%;
  width: 25%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  color: #111;
  transition: all 0.6s ease;
  background: ${({ isActive1 }) =>
    isActive1 ? "-webkit-linear-gradient(left, #3e5ce4, #4282fa)" : "none"};
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const SlideDiv2 = styled.div`
  height: 100%;
  width: 25%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  color: #111;
  transition: all 0.6s ease;
  background: ${({ isActive2 }) =>
    isActive2 ? "-webkit-linear-gradient(left, #3e5ce4, #4282fa)" : "none"};
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const SlideDiv3 = styled.div`
  height: 100%;
  width: 25%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  color: #111;
  transition: all 0.6s ease;
  background: ${({ isActive3 }) =>
    isActive3 ? "-webkit-linear-gradient(left, #3e5ce4, #4282fa)" : "none"};
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const SlideDiv4 = styled.div`
  height: 100%;
  width: 25%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  color: #111;
  transition: all 0.6s ease;
  background: ${({ isActive4 }) =>
    isActive4 ? "-webkit-linear-gradient(left, #3e5ce4, #4282fa)" : "none"};
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const FormInner = styled.div`
  display: flex;
  width: 100%;
`;

export const Form = styled.form`
  width: 500px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const Field = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 20px;
`;
export const PwdField = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
`;
export const PwdIcons = styled.div`
  top: 13px;
  right: 15px;
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  &:focus {
    border-color: #fc83bb;
  }
`;

export const InputButton = styled.button`
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  padding-left: 0;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
`;
export const PassLink = styled.div`
  margin-top: 5px;
`;
export const PassLinkA = styled.a`
  text-decoration: none;
  color: #fa4299;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const SignUpLink = styled.div`
  text-align: center;
  margin-top: 30px;
`;
export const SignLinkB = styled.a`
  text-decoration: none;
  color: #fa4299;
  &:hover {
    text-decoration: underline;
  }
`;

export const ShowIcon = styled(BiShow)`
  font-size: 22px;
  color: #111;
`;

export const HideIcon = styled(BiHide)`
  font-size: 22px;
  color: #111;
`;
