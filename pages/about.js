import CaseStudy from "../components/CaseStudy";
import NavBar from "../components/NavBar";
import { notuleSummary } from "../content/featureProjects";
import { BodyContainer } from "../components/Containers";
import TextContainer from "../components/TextContainer";
import MainContainer from "../components/MainContainer";
import GlobalStyles from "../components/GlobalStyles";
import Contact from "../components/Contact";

const Notule = () => {
  return (
    <BodyContainer>
      <NavBar />
      <MainContainer>
        <div style={{ margin: "3rem 0" }}>
          <p>
            Olá! Meu nome é Lucas Godoy, sou programador e estutande do 
            Instituto Federal do Mato Grosso do Sul, campos Nova Andradina.
            <br />
            <br />Quando eu começei meus estudos sobre programação em 
                  Campinas, ainda no colegio Bento...
          </p>
          <p>
            texto
          </p>
          <p></p>
          <p>
            texto
          </p>
        </div>
        <Contact />
      </MainContainer>
      <GlobalStyles />
      <style jsx>
        {`
          p {
            font-weight: 500;
          }
        `}
      </style>
    </BodyContainer>
  );
};

export default Notule;