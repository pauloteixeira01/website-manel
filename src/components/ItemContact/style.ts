import Link from "next/link";
import styled from "styled-components";

export const StyledItem = styled.div`
  width: 80%;
  font-size: 16px;
  display: flex;
  align-items: center;

  @media (width > 600px) {
    font-size: 18px;
  }
`;

export const StyledIcon = styled.div`
  margin-right: 10px;
  display: flex;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (width > 600px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  pointer-events: painted;
`;
