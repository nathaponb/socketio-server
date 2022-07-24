import styled from "styled-components";

interface Props {
  disabled: boolean;
}

export const RegisterCtn = styled.div`
  width: 100vw;
  height: 100vh;
  /**
   ** TO CENTER AN ELEMENT IT NEEDS A FLEX PARENT
   ** AND MERGIN "AUTO" APPLIED TO CHILD ELEMENT.
   */
  display: flex;
  background: #eeeeee;
`;

export const RegisterWrap = styled.div`
  max-width: 400px;
  min-width: 270px;
  width: 100%;
  border-radius: 8px;
  padding: 1rem 0;
  background-color: #ffffff;
  margin: auto 1rem;

  article {
    /* padding: 1rem 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    figure {
      width: 60px;
      height: 60px;
      margin-bottom: 5px;
      overflow: hidden;
      /* background: teal; */

      img {
        width: 100%;
        /* animation: Rotation 6s infinite linear; */
      }
    }
    h1 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 0.7rem;
      color: ${({ theme }) => theme.cols.macT1};
      font-weight: bold;
    }
  }

  /**
   ** WHY 432 ?
   ** MAX WIDTH OF REGISTER FORM IS 400px
   ** AND IT HAS MX. OF 1rem, 1rem = 16px SO COMES 32px of MX. AND 432 IN TOTAL OF TAEGET SCREEN
   ** FOR THIS PARTICULAR THING.
   */
  @media only screen and (min-width: 432px) {
    margin: auto;
  }

  /* @keyframes Rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
`;

export const RegForm = styled.form`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid slateGray;
    /* font-family: "Mark OT"; */
    font-family: Arial, Helvetica, sans-serif;

    &:focus {
      outline: none;
    }
    ::placeholder {
      font-size: 16px;
    }
  }

  small {
    margin-top: 5px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const RegisterBtn = styled.button<Props>`
  background-color: ${({ disabled, theme }) =>
    disabled ? "gray" : theme.cols.macBlue};
  color: #ffffff;
  height: 3rem;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "gray" : "#0268d6")};
  }
`;
