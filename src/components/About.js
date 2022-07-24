import { Container, Row, Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import glacier from "../assets/images/glacier.jpeg";
export const About = () => {
    return (
      <section className="about" id="#">
      <Container>
        <Row className="align-items-center">  
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : "600"}>
                 <h1 className="about-title">About Me</h1>
                 <Col className="bodycol" xs={12} md={6} xl={7}>
                 <p className="about-body">Exercitation qui amet consectetur eiusmod aliquip Lorem in ad deserunt dolor. 
                     Occaecat exercitation exercitation deserunt ea dolor aute reprehenderit excepteur.
                      Consequat ea proident fugiat deserunt amet laboris ad est culpa fugiat elit id.
                      Consequat ea proident fugiat deserunt amet laboris ad est culpa fugiat elit id</p>
                      </Col>
              </div>}
            </TrackVisibility>
          </Col>
          <Col d-flex flex-row-reverse>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={glacier} alt="glacier"/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    )
}

