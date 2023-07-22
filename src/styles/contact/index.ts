import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
`;

export const StyledContent = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #94b4db;
  border-radius: 1rem;
  margin-top: 1rem;

  @media (width > 600px) {
    width: 18%;
  }
`;

export const StyledContainerPhoto = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  @media (width > 600px) {
    img {
      width: 16rem;
      height: 16rem;
    }
  }
`;