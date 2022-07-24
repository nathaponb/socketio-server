import React, { useState, useRef, useEffect } from "react";
import * as S from "../styled";
import { useDispatch } from "react-redux";
import {
  AttemptRegisterUser,
  IUser,
  IIdenticon,
} from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import BlockIcon from "../assets/png/cowdy3.png";
import ReCAPTCHA from "react-google-recaptcha";
import genIdenticon from "../utils/genIdenticon";
import { v4 as uuidv4 } from "uuid";
import RegisterBtn from "../components/RegisterBtn";
import CryptoJS from "crypto-js";
import Identicon from "../components/Identicon";

function Register(): JSX.Element {
  /**
   * * Identicon figure depends on input value *username, So component states need to be declared separately
   * * to avoid unnecessary re-rendering.
   */
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const reRef = useRef<ReCAPTCHA>(null);
  const [hexString, setHexString] = useState<string>(
    "c157a79031e1c40f85931829bc5fc552"
  );
  const [rgba, setRgba] = useState<[number, number, number, number]>([
    15, 23, 42, 255,
  ]);
  const [isRobot, setIsRobot] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username || !role) {
      return;
    }

    const token = await reRef.current?.executeAsync(); // reCAPCHA token
    reRef.current?.reset();

    try {
      /**
       * * mainly purpose is to verify reCAPTCHA token
       */
      dispatch(
        AttemptRegisterUser({
          clientID: uuidv4(),
          username: username,
          role: role,
          identicon: { hash: hexString, rgba: rgba },
          token,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  function handleSetUsername(e: React.ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value);
  }

  function handleSetRole(e: React.ChangeEvent<HTMLInputElement>): void {
    setRole(e.target.value);
  }

  function handleReCAPTCHA(token: string | null) {
    setIsRobot(false);
  }

  const setIdenticonColor = React.useCallback(
    (selectCol: [number, number, number, number]) => {
      // setIdenticon((p) => ({ ...p, rgba: selectCol }));
      setRgba(selectCol);
    },
    []
  );

  // CryptoJS.SHA256 returns obj when use in string context, it automatically convert to hexdecimal
  function calcHexStr(str: string | null): string {
    if (str) {
      return `${CryptoJS.SHA256(str)}`;
    } else {
      return "c157a79031e1c40f85931829bc5fc552";
    }
  }

  const MemoizeCalcHexStr = React.useMemo(() => {
    return calcHexStr(username);
  }, [username]);

  // Create a base64 encoded PNG
  const memoizeGenIdenticon = React.useMemo(() => {
    return genIdenticon(MemoizeCalcHexStr, rgba);
  }, [MemoizeCalcHexStr, rgba]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // UPDATE IDENTICON DATA WHEN USER TYPING
  useEffect(() => {
    setHexString(MemoizeCalcHexStr);
  }, [username]);

  return (
    <S.RegisterCtn>
      <S.RegisterWrap>
        <article>
          <figure>
            <img src={BlockIcon} alt="" />
          </figure>
          <h1>Cowdy</h1>
        </article>
        <S.RegForm onSubmit={handleFormSubmit}>
          <input
            ref={inputRef}
            onChange={handleSetUsername}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={handleSetRole}
            type="text"
            placeholder="Proficient in"
          />

          <Identicon
            identicon={memoizeGenIdenticon}
            setIdenticonColor={setIdenticonColor}
          />

          <RegisterBtn disabled={username && role ? false : true} />

          <small>
            {/* <input
              type="checkbox"
              checked={checkbox}
              onClick={() => setCheckbox(!checkbox)}
            /> */}
            <small>
              This is one time registration, we do not collect your personal
              data. refresh the page means new register
            </small>
          </small>

          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_RECAPCHA_SITE_KEY}`}
            size="invisible"
            ref={reRef}
          />
        </S.RegForm>
      </S.RegisterWrap>
    </S.RegisterCtn>
  );
}

export default Register;
