import React from "react";
import * as S from "../../styled";

interface Props {
  text: string;
  timeStamp: Date;
}

function Notify(
  { text, timeStamp }: Props,
  ref: React.Ref<HTMLDivElement> | null
): JSX.Element {
  return (
    <S.Notify ref={ref}>
      <p>{text}</p>
      {/* <p>{ timeStamp.toString() }</p> */}
    </S.Notify>
  );
}

const forwardEl = React.forwardRef(Notify);
export default React.memo(forwardEl);
