import React, { ReactElement } from 'react'
import {  
  FaEnvelope, 
  FaWhatsapp, 
  FaInstagramSquare
} from 'react-icons/fa'

import ItemContact from '../../components/ItemContact'

import { StyledContainer, StyledContent, StyledContainerPhoto } from '../../styles/contact'

export default function Contact(): ReactElement {
  return (
    <StyledContainer>
      <StyledContent>
        <ItemContact 
          IconFa={FaEnvelope} 
          title='emanuelsousa804@gmail.com'
        />
        <ItemContact 
          IconFa={FaWhatsapp} 
          LinkContact="https://api.whatsapp.com/send?phone=85996812921&text=Hey! I´m%20from your website!" 
          title="(85) 996812921"
        />
        <ItemContact 
          IconFa={FaInstagramSquare} 
          LinkContact="https://instagram.com/manel_tattoo?igshid=OGQ5ZDc2ODk2ZA==" 
          title="Manel Tatoo"
        />
      </StyledContent>
      <StyledContainerPhoto>
        <img src="/img2.jpeg" alt="logo" />
      </StyledContainerPhoto>
    </StyledContainer>
  )
}
