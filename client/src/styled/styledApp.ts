import styled from "styled-components";

export const App = styled.div`
  max-width: 1300px;
  width: 100vw;
  height: 100vh;
  margin: auto;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: 70px 1fr;
  min-height: 100vh;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 2;
    grid-row: 1 / span 2;
    display: block;
    border-right: ${({ theme }) => `1px ${theme.borders.border1}`};
  }
`;

export const Chat = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;

  /**
   ** MIN WIDTH FOR MOBILE SCREEN IS CALCULATED WITH APP GRID COLUMN WIDTH
   ** IF IT < MIN WIDTH BEING SET HERE THEN THIS IS APPLIED
   ** OTHERWISE, THE APP GRID COLUMN WIDTH IS SET AS THE BASED OF MIN WIDTH.
   */
  min-width: 350px;

  display: flex;
  flex-direction: column;
  overflow: auto;
  border-right: ${({ theme }) => `1px ${theme.borders.border1}`};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 2 / span 3;
    grid-row: 1 / span 2;
  }
`;
