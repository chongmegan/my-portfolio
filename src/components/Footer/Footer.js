import React from 'react';
import { 
    Copyright,
    Up,
    UpIcon,
    FooterText
} from './Footer.styles';

const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    return (
        <Copyright>
            <Up onClick={scrollTop} id="up">
                <UpIcon className="fa fa-arrow-up"/>
            </Up>
            <FooterText>&copy; 2021 Megan Chong</FooterText>
        </Copyright>
    );
}

export { Footer };