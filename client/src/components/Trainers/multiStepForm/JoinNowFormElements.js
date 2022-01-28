import styled from "styled-components";
export const RegisterFormSect = styled.section`
  height: auto;
  background-color: #fff;
  width: 100%;
`;
export const RegisterFormSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
`;
export const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  width: 500px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
export const Field = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 25px;
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
export const NextButton = styled.button`
  height: 100%;
  width: 45%;
  outline: none;
  margin-left: 5%;
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
  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrevButton = styled.button`
  height: 100%;
  width: 45%;
  margin-right: 5%;
  outline: none;
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
  &:disabled {
    cursor: not-allowed;
  }
`;
