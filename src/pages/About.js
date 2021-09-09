import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import {
    AboutContainer,
    ProfileImgContainer,
    ProfileImg,
    AboutDetails,
    AboutHeading,
    AboutHeadingText,
    AboutText,
    SocialMedia,
    SocialMediaLink,
    SocialMediaRow,
    Item,
    FacebookIcon,
    LinkedInIcon,
    GithubIcon,
    GmailIcon
} from '../pages/About.styles';
import {
    Homepage,
    H1,
    HomepageLink
} from '../pages/Project.styles';
import profilePic from '../images/profilepic.jpg';


const About = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>
            
                <AboutContainer>
                    <AboutDetails>
                        <AboutHeading>
                            <AboutHeadingText>About Me</AboutHeadingText>
                        </AboutHeading>
                        <AboutText>
                            Hi! I'm Megan, a Behavioral Neuroscience student at Northeastern University with a passion for human-centered design, front-end 
                            development, and on a mission to make design accessible for everyone. As my interest in the field of Interaction Design continues 
                            to grow, I decided I would track my journey in design and development by creating this website. Feel free to look around!
                        </AboutText>
                        <SocialMedia>
                            <SocialMediaRow>
                                <Item>
                                    <SocialMediaLink href="https://www.facebook.com/megan.chong.39" rel="noopener noreferrer" target="_blank">
                                        <FacebookIcon className="fa fa-facebook-square"/>
                                    </SocialMediaLink>
                                </Item>
                                <Item>
                                    <SocialMediaLink href="https://www.linkedin.com/in/megan-chong-/" rel="noopener noreferrer" target="_blank">
                                        <LinkedInIcon className="fa fa-linkedin-square"/>
                                    </SocialMediaLink>
                                </Item>
                                <Item>
                                    <SocialMediaLink target="_blank" rel="noopener noreferrer" href="mailto:chong.m@northeastern.edu">
                                            <GmailIcon className="fa fa-envelope-square"/>
                                    </SocialMediaLink>
                                </Item>
                                <Item>
                                    <SocialMediaLink href="https://github.com/chongmegan" rel="noopener noreferrer" target="_blank">
                                        <GithubIcon className="fa fa-github-square"/>
                                    </SocialMediaLink>
                                </Item>
                            </SocialMediaRow>
                        </SocialMedia>
                    </AboutDetails>
                    <ProfileImgContainer>
                        <ProfileImg src={profilePic} alt=""/>
                    </ProfileImgContainer>
                </AboutContainer>
            <Footer/>
        </div>
    )
}

export default About;