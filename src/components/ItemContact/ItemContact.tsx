import React, { ReactElement } from 'react'

import {ItemContactProps} from './interfaces'

import { StyledItem, StyledIcon, StyledLink } from './style'

const ItemContact = ({ IconFa, LinkContact, title }: ItemContactProps): ReactElement => {
  return (
    <StyledItem>
      <StyledIcon>
        <IconFa />
      </StyledIcon>
      {LinkContact ? (
        <StyledLink href={LinkContact} target="_blank">
          {title}
        </StyledLink>
      ) : (
        <p>
          {title}
        </p>
      )}
    </StyledItem>
  )
}

export default ItemContact;
