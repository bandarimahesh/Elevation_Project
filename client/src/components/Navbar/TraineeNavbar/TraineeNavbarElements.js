import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  align-items: center;
  padding: 10px 80px;
  color: #fff;
  @media only screen and (max-width: 1068px) {
    padding: 10px 20px;
  }
  @media only screen and (max-width: 968px) {
    padding: 10px 40px;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 250px;
  height: 60px;
  cursor: pointer;
`;
export const MenuContainer = styled.div`
  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
export const MenuItem = styled.ul``;
export const NavItem = styled.li`
  list-style-type: none;
  display: inline-block;
  margin: 0 20px;
  font-size: 19px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  @media only screen and (max-width: 1068px) {
    margin: 0 18px;
  }
`;

export const RightbarContainer = styled.div`
  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
export const RightbarContainer1 = styled.div`
  display: flex;
  align-items: center;
`;
export const RightbarContainerMenu = styled.div`
  /* display: flex;
  align-items: center; */
`;

export const RightbarContainerList = styled.p`
  display: inline-block;
  list-style-type: none;
  margin: 0 5px;
  font-size: 19px;
  font-weight: 500;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  &:nth-child(4) {
    position: relative;
  }
  &:nth-child(6) {
    margin-right: 0;
  }
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  @media only screen and (max-width: 1068px) {
    display: none !important;
  }
`;
export const SearchForm = styled.form`
  position: relative;
`;
export const SearchBoxInput = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
`;
export const FaSearchIcon = styled(FaSearch)`
  font-size: 24px;
  color: #111;
  opacity: 0.8;
  top: 12px;
  right: 5px;
  position: absolute;
`;
export const FaCartIcon = styled(FiShoppingCart)`
  height: 25px;
  width: 25px;
  color: #fff;
  position: relative;
`;
export const CartBox = styled.div`
  padding: 0 !important;
  position: relative !important;
`;
export const CartQuantity = styled.p`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  width: 20px;
  font-size: 13px;
  text-align: center;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
`;
export const CartQuantity1 = styled.p`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  width: 20px;
  font-size: 13px;
  text-align: center;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
export const SearchBoxDiv = styled.div`
  @media only screen and (max-width: 1068px) {
    display: none !important;
  }
`;

export const ProfileBoxRes = styled.div`
  display: none;
  @media only screen and (max-width: 968px) {
    display: block;
  }
`;
export const ProfileBoxRes1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ProfileImg1 = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px 20px;
  cursor: pointer;
  @media only screen and (max-width: 968px) {
    display: block;
  }
`;
export const MenuBarContainer = styled.div`
  cursor: pointer;
  font-size: 1.8rem;
  align-items: center;
  margin-top: 13px;
`;
