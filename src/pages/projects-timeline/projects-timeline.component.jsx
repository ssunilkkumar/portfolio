import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import AirtbaleImg from "../../assets/img/projects/airtable.png";
import coscheduleImg from "../../assets/img/projects/coschedule.png"
import rentomojoImg from "../../assets/img/projects/rentomojo.png";
import yartaImg from "../../assets/img/projects/yatra.png"
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import REACT from "../../assets/img/skills/react.svg";
import NODE_JS from "../../assets/img/skills/nodejs.svg";
import EXPRESS from "../../assets/img/skills/express.svg";
import MONGODB from "../../assets/img/skills/mongodb.svg";
import JAVASCRIPT from "../../assets/img/skills/javascript.svg"
import Image from "react-bootstrap/Image";
import REDUX from "../../assets/img/skills/redux.svg";
import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            date="08/02/2021"
            className="text-center"
            text="Airtbale Clone"
            src={AirtbaleImg}
            alt="Airtable clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A web page that is used to manage businness and store data
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>login page, signup page, product page, pricing page</li>
                          <li>Powered by React and Material UI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/ssunilkkumar/project_airtable"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/10h1iGemczQQUUoqQGSBDAnuLt3qnNhXH/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


<ImageEvent
            date="13/03/2021"
            className="text-center"
            text="CoSchedule clone"
            src={coscheduleImg}
            alt="CoSchedule"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A web page that is used to schedule meetings and other works in one place.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can schedule meetings, see plans and perform login and signup</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                              <Image
                                src={HTML5}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={CSS3}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={JAVASCRIPT}
                                alt="javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/ssunilkkumar/CoSchedule_clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1vszRouARfpQARXHz9Xqi-BXZCIuSHcEk/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="19/06/2021"
            className="text-center"
            text="Rentomojo clone"
            src={rentomojoImg}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Rentomojo is a website where anyone can get household products on rent.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can select any product, add it to cart and then proceeed for payment</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                              <Image
                                src={REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={MONGODB}
                                alt="mongodb"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/akjha96/getGithubInfo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1F7OdXcJq7683__QOGK_ZYwHKDcIA3DrV/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="26/07/2021"
            className="text-center"
            text="Yatra bus booking clone"
            src={yartaImg}
            alt="Yatra bus booking"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A web page which is used to book bus ticket.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Otp and Google login</li>
                          <li>Select bus on specific date and choose seat then proceed for booking</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                              <Image
                                src={REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={REDUX}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          </li>
                          <li>
                              <Image
                                src={MONGODB}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/akjha96/Smart_Brain"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/11CQCVUZXiw3BPAMEzYkRYXV0sd-iZJ5W/view?usp=sharing"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
