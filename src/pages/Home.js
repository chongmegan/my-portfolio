import React from 'react';
import {
    LandingText, 
    LandingName, 
    LandingSubtext, 
    Section, 
    AboutContainer, 
    Container,
    ProfileImgContainer,
    ProfileImg,
    AboutDetails,
    AboutHeading,
    AboutHeadingFirst,
    AboutHeadingSecond,
    AboutText,
    SocialMedia,
    SocialMediaRow,
    Item,
    SocialMediaLink,
    FacebookIcon,
    LinkedInIcon,
    GmailIcon,
    GithubIcon,
    PortfolioHeading,
    PortfolioHeadingText,
    PortfolioSubheading
} from './Home.styles';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { PortfolioItemOdd } from '../components/Portfolio-Item/portfolio-item-odd';
import { PortfolioItemEven } from '../components/Portfolio-Item/portfolio-item-even';
import profilePic from '../images/profile.jpeg';
import portfolioMockup from '../images/portfoliomockup.jpeg';
import Worksense from '../images/Worksense.jpg';
import WeSchedule from '../images/WeSchedule.jpg';
import CornerHealth from '../images/cornerhealthmockup.jpeg';
import BrooklynBridge from '../images/brooklynbridge.jpg';


const Home = () => {
    return (
        <div>
            <Header height="100vh"/>
            <LandingText>
                <LandingName>Megan Chong</LandingName>
                <LandingSubtext>Behavioral Neuroscience and Interaction Design Student</LandingSubtext>
            </LandingText>
            <Section>
                <AboutContainer>
                    <ProfileImgContainer data-aos="fade-right" data-aos-delay="300">
                        <ProfileImg src={profilePic} alt=""/>
                    </ProfileImgContainer>
                    <AboutDetails data-aos="fade-left" data-aos-delay= "600">
                        <AboutHeading>
                            <AboutHeadingFirst>About</AboutHeadingFirst>
                            <AboutHeadingSecond>Myself</AboutHeadingSecond>
                        </AboutHeading>
                        <AboutText>
                            Hi! I'm Megan, a Behavioral Neuroscience student at Northeastern University with a passion for human-centered design, front-end development, and on a mission to make design accessible for everyone. As my interest in the field of Interaction Design continues to grow, I decided I would track my journey in design and development by creating this website. Feel free to look around!
                        </AboutText>
                        <SocialMedia>
                            <SocialMediaRow>
                                <Item>
                                    <SocialMediaLink href="https://www.facebook.com/megan.chong.39" rel="noopener noreferrer" target="_blank">
                                        <FacebookIcon className="fa fa-facebook-square"></FacebookIcon>
                                    </SocialMediaLink>
                                </Item>
                                <Item>
                                    <SocialMediaLink href="https://www.linkedin.com/in/megan-chong-/" rel="noopener noreferrer" target="_blank">
                                        <LinkedInIcon className="fa fa-linkedin-square"></LinkedInIcon>
                                    </SocialMediaLink>
                                </Item>
                                <Item>
                                    <SocialMediaLink target="_blank" rel="noopener noreferrer" href="mailto:chong.m@northeastern.edu">
                                            <GmailIcon className="fa fa-envelope-square"></GmailIcon>
                                    </SocialMediaLink>
                                </Item>
                                <Item>
                                    <SocialMediaLink href="https://github.com/chongmegan" rel="noopener noreferrer" target="_blank">
                                        <GithubIcon className="fa fa-github-square"></GithubIcon>
                                    </SocialMediaLink>
                                </Item>
                            </SocialMediaRow>
                        </SocialMedia>
                    </AboutDetails>
                </AboutContainer>
            </Section>

            <Section>
                <Container>
                    <PortfolioHeading>
                        <PortfolioHeadingText>Portfolio</PortfolioHeadingText>
                        <PortfolioSubheading>View some of my past projects and things I am currently working on</PortfolioSubheading>
                    </PortfolioHeading>

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="Development and Design"
                    company="In Progress"
                    description="A collection of projects and plans that I am currently working on"
                    redirect="/in-progress"
                    image={portfolioMockup}
                /> 

                <PortfolioItemEven
                    imgfade="fade-left"
                    imgdelay="600"
                    descfade="fade-right" 
                    descdelay="300"
                    header="Front End Web Development"
                    company="Worksense Analytics"
                    description="Rebranding and building a marketing website for Worksense Analytics at Scout design studio"
                    redirect="/worksense"
                    image={Worksense}
                /> 

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="UI/UX Design"
                    company="WeSchedule"
                    description="A collaborative scheduling tool idea designed for roommates"
                    redirect="/weschedule"
                    image={WeSchedule}
                /> 

                <PortfolioItemEven
                    imgfade="fade-left"
                    imgdelay="600"
                    descfade="fade-right" 
                    descdelay="300"
                    header="Mobile Application Design"
                    company="CornerHealth"
                    description="An application designed to combat food deserts throughout America"
                    redirect="/cornerhealth"
                    image={CornerHealth}
                /> 

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="Visual Media"
                    company="Film Photography"
                    description="A collection of some of my 35mm film photography || Shot with a Konica Autoreflex TC"
                    redirect="Home.js"
                    image={BrooklynBridge}
                /> 

        </Container>
    </Section>
    <Footer/>
        </div>
    );
}

export default Home;