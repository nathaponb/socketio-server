import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import * as S from "../styled";

interface Props {
  disabled: boolean;
}

function RegisterBtn({ disabled }: Props) {
  return (
    <S.RegisterBtn disabled={disabled}>
      <p>Register</p>
      <BsArrowRightCircle />
    </S.RegisterBtn>
  );
}

export default RegisterBtn;
