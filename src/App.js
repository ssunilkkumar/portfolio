import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import SkillComp from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";

import FooterPanel from "./components/footer/footer.component";

import "./App.css";
import ParticlesBackground from "./components/layout/Particles"
import { fade } from "@material-ui/core";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <ParticlesBackground />
      <MyTitleMessage />
      <MyNavbar />
      <hr />
      <div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        {/* </Parallax> */}
      </div>
      <Container className="container-box rounded">
        <Fade bottom duration={500}>
          <hr />
          <SkillComp />
        </Fade>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            {/* <hr /> */}

            {/* <Experience /> */}
          </Fade>
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
