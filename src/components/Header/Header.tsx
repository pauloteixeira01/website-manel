import React, { ReactElement } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import {useHeader} from '../../hooks/Header'

import { 
  StyledContainer, 
  StyledContent,
  StyledContentTitle,
  StyledTitle,
  StyledSubTitle, 
  StyledNavLinks, 
  StyledAncora,  
  StyledMenu, 
  StyledCloseSidebar 
} from './style'

export default function Header(): ReactElement {
  const {sidebar, showSiderbar, activeLink} = useHeader()

  return (
    <StyledContainer>
      <StyledContent>
        <StyledContentTitle>
          <StyledTitle>
            Manel Tatoo
          </StyledTitle>
          <StyledSubTitle>
            Tatuador
          </StyledSubTitle>
        </StyledContentTitle>
        <StyledMenu>
          <FaBars onClick={showSiderbar} />
        </StyledMenu>
        <StyledNavLinks sidebar={sidebar}>
          <StyledCloseSidebar onClick={showSiderbar}><FaTimes /></StyledCloseSidebar>
          <StyledAncora href="/" className={activeLink('')} onClick={showSiderbar}>
            Home
          </StyledAncora>
          <StyledAncora href="projects" className={activeLink('projects')} onClick={showSiderbar}>
            Projects
          </StyledAncora>
          <StyledAncora href="contact" className={activeLink('contact')} onClick={showSiderbar}>
            Contact
          </StyledAncora>
        </StyledNavLinks>
      </StyledContent>
    </StyledContainer>
  )
}
