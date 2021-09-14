import React from 'react';
import { Header } from '../components/Header/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Footer } from '../components/Footer/Footer';
import { BottomNavigation } from '../components/Bottom-Navigation/BottomNav';
import { 
    Homepage,
    H1,
    HomepageLink,
    ProjectContainer,
    ProjectHeader,
    ProjectTags,
    ProjectOverview,
    MainProjectList,
    ProjectListItem,
    IndividualSlide
} from './Project.styles';
import SharkTank from '../images/SharkTank.png';
import WomensHealth from '../images/WomensHealth.jpg';
import KnowledgeBurst from '../images/KnowledgeBurst.jpg';
import HLPMEgrant from '../images/HLPMEgrant.jpg';
import AISeries from '../images/AISeries.jpg';
import CalorieWorkshop from '../images/CalorieWorkshop.png';


const properties = {
  duration: 5000,
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true
}

const Brigham = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>

                <ProjectContainer>
                    <ProjectHeader>Media and Design Co-op</ProjectHeader>
                    <ProjectTags>Graphic Design, UI/UX, Web Development, Mobile App Development</ProjectTags><br/>   
                    <ProjectOverview>
                        I co-oped at Brigham and Women's Hospital at the Brigham Education Insititute (BEI) and the Brigham Research Institute (BRI) Spring 2021 
                        and stayed on the team part-time Fall/Winter 2021 as the Media and Design intern. 
                        <br/>
                        <br/>
                        During my time here I was responsible for: 
                    </ProjectOverview>
                        <MainProjectList>
                            <ProjectListItem>
                                Producing graphics and visuals for flatscreens around the hospital
                            </ProjectListItem>
                            <ProjectListItem>
                                Creating cohesive series visuals for Twitter
                            </ProjectListItem>
                            <ProjectListItem>
                                Creating flyers, brochures, presentation templates, sponsorship packets, and certificates for various events and programs
                            </ProjectListItem>
                            <ProjectListItem>
                                Wireframing and prototyping a hospital-wide mobile application for education
                            </ProjectListItem>
                            <ProjectListItem>
                                Managing the BEI website run by OpenScholar and keeping site content up-to-date
                            </ProjectListItem>
                            <ProjectListItem>
                                Designing a vascular surgery website through Wordpress for use by Harvard Medical School surgical residents
                            </ProjectListItem>
                        </MainProjectList>
                        <Slide {...properties} /*easing="ease"*/>
                            <IndividualSlide style={{'backgroundImage': `url(${SharkTank})`}}/>
                            <IndividualSlide style={{'backgroundImage': `url(${WomensHealth})`}}/>
                            <IndividualSlide style={{'backgroundImage': `url(${KnowledgeBurst})`}}/>
                            <IndividualSlide style={{'backgroundImage': `url(${HLPMEgrant})`}}/>
                            <IndividualSlide style={{'backgroundImage': `url(${AISeries})`}}/>
                            <IndividualSlide style={{'backgroundImage': `url(${CalorieWorkshop})`}}/>
                        </Slide>
                </ProjectContainer>
            
            <BottomNavigation
            back="/"
            next="/bei-app"
            />
            <Footer/>
        </div>
    );
}

export default Brigham;