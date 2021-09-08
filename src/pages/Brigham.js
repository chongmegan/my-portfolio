import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { BottomNavigation } from '../components/Bottom-Navigation/BottomNav';
import { 
    Homepage,
    H1,
    HomepageLink,
    ProjectContainer,
    ProjectContent,
    ProjectHeader,
    ProjectTags,
    ProjectDescription,
    ProjectList,
    ProjectListItem,
    H2
} from './Project.styles';

const Brigham = () => {
    return(
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>

                <ProjectContainer>
                    <ProjectContent>
                        <ProjectHeader>Media and Design Co-op</ProjectHeader>
                        <ProjectTags>Graphic Design, UI/UX, Web Development, Mobile App Development</ProjectTags><br/>   
                        <ProjectDescription>
                            I co-oped at Brigham and Women's Hospital at the Brigham Education Insititute (BEI) and the Brigham Research Institute (BRI) Spring 2021 and stayed 
                            on the team part-time Fall/Winter 2021 as the Media and Design intern. During my time here 
                            I was responsible for: 
                        </ProjectDescription>
                        <ProjectList>
                            <ProjectListItem>Producing graphics and visuals for flatscreens around the hospital</ProjectListItem>
                            <ProjectListItem>Creating cohesive series visuals for Twitter</ProjectListItem>
                            <ProjectListItem>Creating flyers, brochures, presentation templates, sponsorship packets, and certificates for various events and programs</ProjectListItem>
                            <ProjectListItem>Wireframing and prototyping a hospital-wide mobile application for education</ProjectListItem>
                            <ProjectListItem>Managing the BEI website run by OpenScholar and keeping site content up-to-date</ProjectListItem>
                            <ProjectListItem>Designing a vascular surgery website through Wordpress for use by Harvard Medical School surgical residents</ProjectListItem>
                        </ProjectList>
                        <H2>Here are some of the things I created during my time here:</H2>
                        {/*Insert slideshow?*/}
                    </ProjectContent>
                </ProjectContainer>
            
            <BottomNavigation
            back="/"
            next="/worksense"
            />
            <Footer/>
        </div>
    );
}

export default Brigham;