import React from 'react';
import { 
    Copyright,
    Up,
    UpIcon,
    FooterText
} from './Footer.styles';
import { FaAngleUp } from 'react-icons/fa';

const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    return (
        <Copyright>
            <Up onClick={scrollTop} id="up">
                <UpIcon><FaAngleUp/></UpIcon>
            </Up>
            <FooterText>&copy; 2021 Megan Chong</FooterText>
        </Copyright>
    );
}

export { Footer };