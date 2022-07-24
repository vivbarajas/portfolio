import { Container, Row, Col } from "react-bootstrap"
import headshot from "../assets/images/head.jpg"


export const Projects = () => {
    return(
        <div className="projects">
             <div className="projects_heading">
                 <h1 className="heading">My Latest Projects</h1>
                 <p className="heading_p_color">
                     Sint veniam ad anim consectetur anim enim culpa laboris.
                      Qui occaecat adipisicing nostrud culpa Lorem amet Lorem mollit incididunt sit irure laboris.   
                 </p>
                <p className="heading_p_color">but the majority have suffered alteration</p>
             </div>
             <Container>
                 <Row>
                 <Col>1 <img src={headshot} alt="" className="aboutimg"></img></Col>
                 
                <Col>2 of 3</Col>
                 <Col>3 of 3</Col>
                 </Row>
             </Container>
             </div>
             
    )
 }
