import React, { ReactElement } from 'react'
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaGithub, 
  FaWhatsapp, 
  FaTelegram 
} from 'react-icons/fa'

import ItemContact from '../../components/ItemContact'

import { StyledContainer, StyledContent, StyledContainerPhoto } from '../../styles/contact'

export default function Contact(): ReactElement {
  return (
    <StyledContainer>
      <StyledContent>
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/pauloteixeira01"
          title='github.com/pauloteixeira01' 
        />
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/paulo-teixeira-developer/"
          title='linkedin.com/in/paulo-teixeira-developer/'
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          title='paulo.teixeira541@gmail.com'
        />
        <ItemContact 
          IconFa={FaWhatsapp} 
          LinkContact="https://api.whatsapp.com/send?phone=85986629688&text=Hey! I´m%20from your website!" 
          title="(85) 98662-9688"
        />
        <ItemContact 
          IconFa={FaTelegram} 
          LinkContact="https://t.me/paulotxjs" 
          title="(85) 98662-9688"
        />
      </StyledContent>
      <StyledContainerPhoto>
        <img src="/profile.png" alt="logo" />
      </StyledContainerPhoto>
    </StyledContainer>
  )
}
