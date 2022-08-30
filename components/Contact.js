import { SectionContainer } from "./Containers";
import styled from "styled-components";

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #c6c6c6;
  margin-bottom: 30px;
`;

const Contact = () => {
	return (
		<SectionContainer>
			<Line />
			<LinksContainer>
				<a>lucas.moraes.godoy@gmail.com</a>
				<a href="https://www.linkedin.com/in/lucas-godoy-84091021b/">LinkedIn</a>
				<a href="https://www.instagram.com/devlucasgodoy/">Instagram</a>
				<a href="https://github.com/DevLucasGodoy">Github</a>
				<a href="https://calendly.com/lucas-godoy-dev/meeting">Calendário</a>
			</LinksContainer>
			<p>2022 • Construido por @DevLucasGodoy</p>

			<style jsx>
				{`
          a {
            transition: all 250ms;
            cursor: pointer;
            margin: 0 20px 20px 0;
            font-size: 1.2rem;
            font-weight: 500;
          }

          p {
            margin: 0;
          }
        `}
			</style>
		</SectionContainer>
	);
};

export default Contact;