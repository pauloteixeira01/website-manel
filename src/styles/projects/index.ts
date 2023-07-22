import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  width: 100%;
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const StyledUl = styled.ul`
  overflow-x: auto;
  height: inherit;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 760px) {
   font-size: 13px;
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
