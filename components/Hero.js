import styled from "styled-components";
import PrimaryButton from "./atoms/PrimaryButton";
import FloatingArrow from "./atoms/FloatingArrow";
import NotificationBanner from "./atoms/NotificationBanner";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  max-height: 60vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 50px;
`;

const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const Span = styled.span`
	color: #e91e63;
	background-color: #fde8ef;
	padding: 0 10px;
	border-radius: 5px;
`;

const Hero = () => {
	return (
		<HeroContainer>
			<NotificationBanner>
				<span>
					Novidade! Vamos encontrar um tempo para conversar no meu   
          <a style={{ textDecoration: "underline" }} href="https://calendly.com/lucas-godoy-dev/meeting"> Calendário.</a>
				</span>
			</NotificationBanner>
			<HeaderContainer>
				<HeaderTitle>
					Seja muito bem-vindo(a) ao meu portfólio pessoal. Atualmente eu estou Informática no 
          <Span>Instutito Federal do Mato Grosso do Sul</Span> e pretendo continuar nessa área 
          principalmente como desenvolvedor full stack. Nesse portfólio vocês vão conhecer um 
          pouco mais sobre mim e que serviços eu ofereço.
        </HeaderTitle>
				<PrimaryButton href='/about'>MAIS SOBRE MIM</PrimaryButton>
			</HeaderContainer>
			<p style={{ fontWeight: "600" }}>MEUS TRABALHOS</p>
			<FloatingArrow />
		</HeroContainer>
	);
};

export default Hero;
