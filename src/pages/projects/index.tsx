import React, { useEffect } from 'react'

import {useProjects} from '../../hooks/Projects'

import { StyledContainer, StyledContent, StyledUl, StyledLi } from '../../styles/projects'

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
       <StyledUl>
        {itemsApi.map(item => (
          <StyledLi key={item.id}>
            <strong>{item.name.toUpperCase()}</strong>
            <span>URL: {item.url}</span>
            <span>Date creation: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </span>
          </StyledLi>
        ))}
       </StyledUl>
     </StyledContent>
   </StyledContainer>
  )
}