import html from '../assets/svg/html.svg';
import photoshop from '../assets/svg/photoshop.svg';
import css from '../assets/svg/css.svg';
import javascript from '../assets/svg/javascript.svg';
import react from '../assets/svg/react.svg';
import typescript from '../assets/svg/typescript.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import microsoftoffice from '../assets/svg/microsoftoffice.svg';
import canva from '../assets/svg/canva.svg';
import {SiAdobeindesign} from "@react-icons/all-files/si/SiAdobeindesign";


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'javascript':
            return javascript;
        case 'css':
            return css;
        case 'react':
            return react;
   
        case 'bootstrap':
            return bootstrap;
        case 'canva':
            return canva;
        case 'microsoftoffice':
                return microsoftoffice;
        case 'indesign':
                return {SiAdobeindesign};
      
        default:
            break;
    }
}