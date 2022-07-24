import React from "react";
import * as S from "../../styled";
import { toggled } from "../../features/mechanic/mechanicSlice";
import { useDispatch } from "react-redux";
import LogoIcon from "../../assets/svg/axe.svg";
// import GithubIcon from "../../assets/png/github1.png";
import CowIcon from "../../assets/png/cowdy3.png";

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggled());
  };

  return (
    <S.HeadChatCtn>
      <S.HeadChatTitleWrap>
        <figure>
          <img src={CowIcon} alt="cow" />
        </figure>
        <article>
          <h1>c/field</h1>
          <p>Everyone is welcome</p>
        </article>
      </S.HeadChatTitleWrap>

      <S.HeadChatIconsWrap>
        <a
          href="https://github.com/hellonathapon"
          target="_blank"
          rel="noopener"
        >
          <div>
            <figure>
              <svg
                viewBox="0 0 16 16"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </figure>
          </div>
        </a>
        <a onClick={handleToggle}>
          <div>
            <figure>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-onkibi"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
                ></path>
              </svg>
            </figure>
          </div>
        </a>
        {/* <a href="#">
          <div>
            <figure>
              <img src={GithubIcon} alt="github" />
            </figure>
          </div>
        </a> */}
      </S.HeadChatIconsWrap>
    </S.HeadChatCtn>
  );
}

export default Header;
