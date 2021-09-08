import React from "react";
import "./App.css";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import About from "./pages/about/about.component";
import SkillComp from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./pages/projects-timeline/projects-timeline.component";
import Fade from "react-reveal/Fade";
import ContactForm from "./pages/contact-form/contact-form.component";
import TitleMessage from "./pages/title/title.component"
import FooterPanel from "./components/footer/footer.component";
import ParticlesBackground from "./components/layout/Particles"

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <ParticlesBackground />
      <MyNavbar />
      <TitleMessage />
      
      <hr />
      <div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
      </div>
      <Container className="container-box rounded">
        <Fade bottom duration={500}>
          <hr />
          <SkillComp />
        </Fade>
      </Container>
      <div>
        <Container className="container-box rounded">
        </Container>
      </div>
      <Container className="container-box rounded">
        <fade bottom duration={500}>
          <hr />
          <TimeLine />
        </fade>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
