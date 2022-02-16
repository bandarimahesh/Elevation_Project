import styled from "styled-components";
import { FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";

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
    display: none !important;
  }
`;
export const MenuItem = styled.ul`
  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  list-style-type: none;
  display: inline-block;
  margin: 0 20px;
  font-size: 19px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;
export const RightbarContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 968px) {
    display: none;
  }
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
  &:nth-child(5) {
    margin-right: 0;
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
export const FaCartIcon = styled(FaShoppingCart)`
  font-size: 22px !important;
  color: #fff;
  /* padding: 0; */
`;
export const CartBox = styled.div`
  padding: 0 !important;
`;
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
export const SearchBoxDiv = styled.div`
  @media only screen and (max-width: 968px) {
    display: none;
  }
`;

export const MenuBarContainer = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  align-items: center;
  margin-top: 13px;

  @media only screen and (max-width: 968px) {
    display: block;
  }
`;
export const DropDownContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;
export const DropDownWrapper = styled.div``;
export const DropDownMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 70px);
`;
export const DropDownLink = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  list-style: none;
  cursor: pointer;
  font-size: 21px;
  font-weight: 500;
  &:hover {
    color: #01bf71;
    transition: all 0.4s ease-in-out;
  }
`;
