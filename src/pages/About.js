import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import {
    AboutContainer,
    ProfileImgContainer,
    ProfileImg,
    AboutDetails,
    HeadingText,
    AboutText,
    CurrentList,
    CurrentListItem,
    SocialMedia,
    SocialMediaLink,
    SocialMediaRow,
    Item,
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
                        <HeadingText>About Me</HeadingText>
                        <AboutText>
                            Hi! I'm Megan, a Behavioral Neuroscience student at Northeastern University, designer and web developer with a passion for human-centered design, 
                            user experience, and on a mission to make design accessible for everyone. As a designer and a learner, I am constantly seeking out ways to expand on 
                            the intersection between neuroscience and design by bettering understanding the functionalities and capabilities of the human brain and incorporating
                            that knowledge into the field of design. 
                            <br/>
                            <br/>
                            Outside of design, I enjoy learning how to code. I am self taught and have found a lot of interest in front-end web development and this website is a 
                            product of countless trials and errors, and infinite hours of Stack Overflow! I am also an escape room and puzzle enthusiast, a film photographer, and 
                            am currently in the process of learning how to drum. Nice to meet you! :)
                        </AboutText>
                        <HeadingText>I am currently...</HeadingText>
                        <CurrentList>
                            <CurrentListItem>
                                <b>a Fourth-Year Student</b>  at Northeastern University studying Behavioral Neuroscience and pursuing a minor in Interaction Design
                            </CurrentListItem>
                            <CurrentListItem>
                                <b>Head of User Experience</b>  at Sandbox (a software consultancy at Northeastern), leading a team of designers in weekly meetings and critiques,
                                and fostering the design community through social events and workshops
                            </CurrentListItem>
                            <CurrentListItem>
                                <b>a Media and Design Intern</b> at Brigham and Women's Hospital working closely with the Brigham Education and Research Institutes on developing an
                                educational mobile app, updating website content, and designing graphics for hospital-wide programs
                            </CurrentListItem>
                            <CurrentListItem>
                                <b>Lead of Transcriptions and Publications</b> at Northeastern University's Center for Spirituality, Dialogue, and Service (CSDS), leading a team of 
                                transcriptionists in meetings and trainings, while managing a database of thousands of poems and manuscripts to prepare them for publication to literary journals
                                and magazines
                            </CurrentListItem>
                        </CurrentList>
                    </AboutDetails>
                    <ProfileImgContainer>
                        <ProfileImg src={profilePic} alt=""/>
                        <SocialMedia>
                            <SocialMediaRow>
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
                    </ProfileImgContainer>
                </AboutContainer>
            <Footer/>
        </div>
    )
}

export default About;