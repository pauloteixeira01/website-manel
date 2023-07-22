import React, { useEffect } from 'react'

import {useProjects} from '../../hooks/Projects'

import { StyledContainer, StyledContent, StyledUl, StyledLi, StyledContainerLogo } from '../../styles/projects'

export default function Projects() {
  const {getGitHubAPI, itemsApi} = useProjects()  

  useEffect(() => {
    let abortController = new AbortController(); 
    getGitHubAPI()
    return () => abortController.abort();  
  }, [getGitHubAPI])

  return (
    <StyledContainer>
     <StyledContent>
      <StyledContainerLogo>
        <img src="/img3.jpeg" alt="logo" /> 
      </StyledContainerLogo>
      {/* <StyledContainerLogo>
        <img src="/img4.jpeg" alt="logo" /> 
      </StyledContainerLogo>
      <StyledContainerLogo>
        <img src="/img5.jpeg" alt="logo" /> 
      </StyledContainerLogo>
      <StyledContainerLogo>
        <img src="/img6.jpeg" alt="logo" /> 
      </StyledContainerLogo> */}
       {/* <StyledUl>
        {itemsApi.map(item => (
          <StyledLi key={item.id}>
            <strong>{item.name.toUpperCase()}</strong>
            <span>URL: {item.url}</span>
            <span>Date creation: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </span>
          </StyledLi>
        ))}
       </StyledUl> */}
     </StyledContent>
   </StyledContainer>
  )
}