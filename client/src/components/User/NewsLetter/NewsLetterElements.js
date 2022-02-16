import styled from "styled-components";
export const NewsLetterSect = styled.section`
  height: 60vh;
  background: url("https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
export const NewsLetterSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const NewsLetterWrapper = styled.div``;
// page title
export const NewsLetterTitle = styled.h1`
  color: blue;
  font-size: 37px;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;
export const LineAfter = styled.div`
  &::before {
    content: "";
    width: 180px;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #9926f0;
  }
  &::after {
    content: "";
    width: 50px;
    height: 4px;
    padding-top: 0.1rem;
    margin: 0 auto;
    display: block;
    background-color: #9926f0;
  }
`;
export const NewsLetterForm = styled.div`
  margin: 50px auto;
  text-align: center;
`;

export const Form = styled.form``;
export const Input = styled.input`
  height: 50px;
  margin: 0 auto;
  /* border: none; */
  color: #fff;
  outline: none;
  border-bottom: 1px solid #fff;
  font-size: 19px;
  background-color: transparent;
  min-width: 300px;
  padding: 10px;
  &::placeholder {
    color: #fff;
  }
`;
export const SubscribeBtn = styled.button`
  margin-top: 10px;
  outline: none;
  padding: 10px 22px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  text-align: center;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
`;
export const Text = styled.h3`
  color: #fff;
  font-weight: 300;
  margin-top: 12px;
`;
