import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
  align-items: center;
    
  @media (width >  600px) {
    flex-direction: row;
    width: 40%;
    padding: 1rem;
  }
`;

export const StyledInfos = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: #6a256f;

  @media (width > 600px) {
    font-size: 26px;
  }
`;

export const StyledDescription = styled.span`
  color: black;
  font-size: 18px;
  text-align: center;

  @media (width > 600px) {
    font-size: 20px;
  }
`;

export const StyledContainerLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
  }

  @media (width > 600px) {
    img {
      width: 20rem;
      height: 20rem;
    }
  }
`;