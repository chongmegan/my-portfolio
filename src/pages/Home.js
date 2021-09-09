import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { PortfolioItemOdd } from '../components/Portfolio-Item/portfolio-item-odd';
import { PortfolioItemEven } from '../components/Portfolio-Item/portfolio-item-even';
import Worksense from '../images/worksenseheader.png';
import WeSchedule from '../images/wescheduleheader.png';
import CornerHealth from '../images/cornerhealthheader.png';
import Brigham from '../images/brigham-header.jpg';
import BrighamApp from '../images/BEIScreen.png';
import booktoons from '../images/booktoons-header.png';
import rdgNU from '../images/rdgNUHeader.png';
import { FaAngleDown } from 'react-icons/fa';
import {
    LandingText, 
    LandingName, 
    LandingSubtext,
    ArrowContainer,
    Section,
    Container,
} from './Home.styles'


const Home = () => {
    return (
        <div>
            <Header height="100vh"/>
            <LandingText>
                <LandingName>Megan Chong</LandingName>
                <LandingSubtext>Behavioral Neuroscience and Interaction Design Student</LandingSubtext>
            </LandingText>
            <ArrowContainer>
                <a scroll-behavior="smooth" href="#portfolio"><FaAngleDown size="50px" color="#203a43"/></a>
            </ArrowContainer>

            <Section id="portfolio">
                <Container>

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="Graphic and Interaction Design"
                    company="Media and Design"
                    description="Graphics and visuals created for the Brigham Education and Research Institutes"
                    redirect="/brigham"
                    image={Brigham}
                /> 
                
                <PortfolioItemEven
                    imgfade="fade-left"
                    imgdelay="600"
                    descfade="fade-right" 
                    descdelay="300"
                    header="Mobile Application + UI/UX Design"
                    company="Brigham Education App"
                    description="An education and resource database application used for professional development at the Brigham and Women's Hospital"
                    redirect="/bei-app"
                    image={BrighamApp}
                /> 

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="UI/UX Design + Front End Development"
                    company="booktoons"
                    description="A website that generates a playlist for your current read"
                    redirect="/booktoons"
                    image={booktoons}
                /> 

                <PortfolioItemEven
                    imgfade="fade-left"
                    imgdelay="600"
                    descfade="fade-right" 
                    descdelay="300"
                    header="UI/UX, Game Design + Front End Development"
                    company="rdgNU"
                    description="A behavioral resource dilemma game created for researchers at Northeastern for a psychology study"
                    redirect="/rdgnu"
                    image={rdgNU}
                /> 

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="Front End Web Development"
                    company="Worksense Analytics"
                    description="Rebranding and building a marketing website for Worksense Analytics at Scout design studio"
                    redirect="/worksense"
                    image={Worksense}
                /> 

                <PortfolioItemEven
                    imgfade="fade-left"
                    imgdelay="600"
                    descfade="fade-right" 
                    descdelay="300"
                    header="UI/UX Design"
                    company="WeSchedule"
                    description="A collaborative scheduling tool idea designed for roommates"
                    redirect="/weschedule"
                    image={WeSchedule}
                /> 

                <PortfolioItemOdd
                    imgfade="fade-right"
                    imgdelay="300"
                    descfade="fade-left" 
                    descdelay="600"
                    header="Mobile Application Design"
                    company="CornerHealth"
                    description="An application designed to combat food deserts throughout America"
                    redirect="/cornerhealth"
                    image={CornerHealth}
                /> 

        </Container>
        </Section>
        <Footer/>
        </div>
    );
}

export default Home;