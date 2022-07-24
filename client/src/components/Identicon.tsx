import React from "react";
import * as S from "../styled";
import { FaPaintBrush } from "react-icons/fa";
import { RiBrush2Line } from "react-icons/ri";

interface Props {
  identicon: string | null;
  setIdenticonColor: (param: [number, number, number, number]) => void;
}
interface IColor {
  name: string;
  hexVal: string;
  rgbaVal: [number, number, number, number];
}

function Identicon({ identicon, setIdenticonColor }: Props) {
  const cols: IColor[] = [
    { name: "teal", hexVal: "#14B8A6", rgbaVal: [20, 184, 166, 255] },
    { name: "sky", hexVal: "#0EA5E9", rgbaVal: [14, 165, 233, 255] },
    { name: "red", hexVal: "#F43F5E", rgbaVal: [244, 63, 94, 255] },
    { name: "amber", hexVal: "#F59E0B", rgbaVal: [245, 158, 11, 255] },
    { name: "purple", hexVal: "#A855F7", rgbaVal: [168, 85, 247, 255] },
    { name: "black", hexVal: "#0F172A", rgbaVal: [15, 23, 42, 255] },
  ];

  const handleSetColor = (col: IColor) => {
    setIdenticonColor(col.rgbaVal);
  };
  return (
    <S.IdenticonCtn>
      <S.IdenticonIMGWrap>
        <figure>
          <img src={`data:image/png;base64, ${identicon}`} alt="Identicon" />
        </figure>
      </S.IdenticonIMGWrap>

      <S.IdenticonColULWrap>
        {cols.map((item, i) => (
          <S.IdenticonColLI
            onClick={() => handleSetColor(item)}
            onKeyDown={() => handleSetColor(item)}
            col={item.hexVal}
            key={i}
            tabIndex={0}
          >
            <FaPaintBrush />
            {item.name}
          </S.IdenticonColLI>
        ))}
      </S.IdenticonColULWrap>
    </S.IdenticonCtn>
  );
}

export default React.memo(Identicon);
