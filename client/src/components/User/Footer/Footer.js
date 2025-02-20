import React from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import {
  Center,
  ContactItem,
  Desc,
  FooterSect,
  FooterSection,
  FooterText,
  FooterWrapper,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
  SpaceDiv,
} from "./FooterElements";
import "./footer.css";
import logo from "../../../images/logo-rm.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <SpaceDiv></SpaceDiv>
      <FooterSect>
        <div className="header">
          <div className="inner-header"></div>
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <FooterSection>
          <FooterWrapper>
            <Left>
              <Logo src={logo} />
              <Desc>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </Desc>
              <SocialContainer>
                <SocialIcon color="3B5999">
                  <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                  <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                  <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                  <Pinterest />
                </SocialIcon>
              </SocialContainer>
            </Left>
            <Center>
              <Title>Useful Links</Title>
              <List>
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/cart"
                  >
                    Cart
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/courses"
                  >
                    My Courses
                  </Link>
                </ListItem>
                <ListItem>My learning</ListItem>
                <ListItem>My Wishlist</ListItem>
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/${user?.type}/profile/update/${user?.id}`}
                  >
                    My Account
                  </Link>
                </ListItem>
                <ListItem>Resume course</ListItem>
                <ListItem>Courses</ListItem>
                <ListItem>
                  <Link
                    to="/privacy"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Privacy & Policies
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="/terms-conditions"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Terms & Conditions
                  </Link>
                </ListItem>
              </List>
            </Center>
            <Right>
              <Title>Contact Us</Title>
              <ContactItem>
                <Room style={{ marginRight: "10px" }} />B 1/5 Safdarjung Enclave
                Africa Avenue New Delhi Pin-110029
              </ContactItem>
              <ContactItem>
                <Phone style={{ marginRight: "10px" }} /> (120) 3569310
              </ContactItem>
              <ContactItem>
                <MailOutline style={{ marginRight: "10px" }} />
                contact@elevashun.com
              </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
          </FooterWrapper>
          <FooterText>
            Elevation © 2022 | This site is developed by Navrik Team. All rights
            reserved.
          </FooterText>
        </FooterSection>
      </FooterSect>
    </>
  );
};

export default Footer;
