import { 
  StyledContainer, 
  StyledContent, 
  StyledInfos, 
  StyledTitle,
  StyledDescription,  
  StyledContainerLogo 
} from '../../styles/home'

 const Home = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledInfos>
          <StyledTitle>Oi!</StyledTitle>
          <StyledDescription>
            Seja bem vindo ao meu website. Aqui você encontrará tudo que precisa saber sobre tatuagens.
          </StyledDescription>
        </StyledInfos>
        <StyledContainerLogo>
          <img src="/img1.jpeg" alt="logo" />
        </StyledContainerLogo>
      </StyledContent>
    </StyledContainer>
  )
}

export default Home
