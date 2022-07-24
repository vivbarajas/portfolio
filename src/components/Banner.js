import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/Test-2.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img className="headshot" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
     
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2 className="header">Web Developer</h2> 

                <h1 className="tagline">Viviana Barajas</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <div className="about_button d_flex align_items_center">
                      <button className="cv-button" onClick={() => console.log('CV')}>Download CV <ArrowRightCircle size={20} /></button>
                      <button className="contact-button" onClick={() => console.log('Contact')}>Contact Me <ArrowRightCircle size={20} /></button>
                      </div>
                  
              </div>}
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
    
  )
}