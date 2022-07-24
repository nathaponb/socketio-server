import styled from "styled-components";

interface Props {
  col: string;
}
export const IdenticonCtn = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
export const IdenticonIMGWrap = styled.div`
  figure {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c2c3d3;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`;

export const IdenticonColULWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 100%;
`;

export const IdenticonColLI = styled.li<Props>`
  background-color: ${({ col }) => col};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
