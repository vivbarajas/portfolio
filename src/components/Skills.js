import Marquee from "react-fast-marquee";
import { skillsData } from "../data/skillsData";
import { skillsImage } from "../utils/skillsImage";

export const Skills = () => {
    const skillBoxStyle = {
       
        boxShadow: `0px 0px 30px `
    }
    return (
        <div id ="skills"className="skills">
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>{skill}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}