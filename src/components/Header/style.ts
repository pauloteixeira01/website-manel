import styled from 'styled-components';
import Link from 'next/link'

import {NavLinksProps} from './interfaces'

export const StyledContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const StyledContent = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const StyledContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.p`
  font-size: 22px; 
  color: black;

  @media (width > 600px) {
    font-size: 28px;
  }
`;

export const StyledSubTitle = styled.p`
  font-size: 14px;
  color: #6a256f;

  @media (width > 600px) {
    font-size: 18px;
  }
`;

export const StyledNavLinks = styled.nav<NavLinksProps>`
  display: flex;
  gap: 20px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 80%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 40%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const StyledAncora = styled(Link)`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  color: #6a256f;
  
  &.active {
    background-color: #94b4db;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const StyledMenu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const StyledCloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;