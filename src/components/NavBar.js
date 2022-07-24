import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png"
import { SocialIcon } from "react-social-icons";
import Scroll from 'react-scroll';
import scrollLink from "react-scroll/modules/mixins/scroll-link";
export const NavBar = () => { 
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
           }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value ) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#">
              <img src= {logo} alt="logo" /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Banner"  className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Banner')}>Home</Nav.Link>
              <Nav.Link href="/About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('About')} >About</Nav.Link>
              <Nav.Link href="/Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')} >Skills</Nav.Link>
            </Nav> 
            <span className="navbar-text">
                <div className="social-icon">
                <SocialIcon url="https://www.linkedin.com/in/vivianabarajas/" bgColor="#fff"/>
                <SocialIcon url="https://www.github.com/vivbarajas/" bgColor="#fff" />
                <SocialIcon url="https://www.instagram.com/alpineplanning" bgColor="#fff" />
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}