import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  min-width: 100vw;
  & nav {
    width: 100%;
  }
  & ul {
    display: flex;
    justify-content: space-around;
    & :nth-child(1) {
      width: 60%;
    }
  }
`;
