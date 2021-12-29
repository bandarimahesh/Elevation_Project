import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  width: 100%;
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
  height: 65px;
  cursor: pointer;
`;
export const MenuContainer = styled.div`
  @media only screen and (max-width: 768px) {
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
`;
export const NavLink = styled(LinkS)``;
export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1068px) {
    display: none !important;
  }
`;
export const SearchBox = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
export const SearchBoxDiv = styled.div`
  position: relative;
`;
export const SearchForm = styled.form`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #111;
`;
export const SearchItemText = styled.p`
  margin-top: 5px;
  margin-right: 5px;
  padding: 5px 15px;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
`;
export const MenuBarContainer = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  align-items: center;
  margin-top: 13px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
