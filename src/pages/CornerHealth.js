import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
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
    ProjectOverview,
    H2,
    LineBreak,
    ProjectList,
    ProjectListItem,
    ProjectImage,
    ProjectiFrame
} from './Project.styles';
import CornerHealthSketch from '../images/CornerHealthSketch.png';


const CornerHealth = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>

            <ProjectContainer>
                <ProjectHeader>CornerHealth</ProjectHeader>
                    <ProjectTags>Research, Wireframing, Prototyping, UX/UI Design</ProjectTags><br/>
                <ProjectOverview>
                    I designed a mobile application to combat food deserts across America and bring fresh produce to low income communities. I decided to utilize corner stores that 
                    already exist in these communities and create an app that can better connect store owners to wholesalers and farmers markets and increase the availability of healthy 
                    and fresh foods in stores that may be the main source of groceries for many families.
                </ProjectOverview>
                <ProjectContent>
                    <H2>Overview</H2>
                    <ProjectDescription>
                        In creating this app, I knew I would need to gear towards the practicality and usability for convenience store owners. I included a grocery 
                        shopping aspect, a tracker to view incentives, a delivery tracker and messaging page, as well as a user profile page.
                        <br/>
                        <br/>
                        I worked on:
                    </ProjectDescription>
                            <ProjectList>
                                <ProjectListItem>Research</ProjectListItem>
                                <ProjectListItem>Structural Organization</ProjectListItem>
                                <ProjectListItem>Wireframes</ProjectListItem>
                                <ProjectListItem>Visual Design</ProjectListItem>
                                <ProjectListItem>Prototyping</ProjectListItem>
                            </ProjectList>
                    <LineBreak/>
                    <H2>Wireframing</H2>
                    <ProjectDescription>
                        To begin the process, I created wireframes of all the pages that I knew I wanted in my app and organized a basic structure.
                    </ProjectDescription>
                    <ProjectImage src={CornerHealthSketch} alt="CornerHealth Sketches"/>
                    <LineBreak/>
                    <H2>Prototyping</H2>
                        <ProjectDescription>
                            I created a visual design prototype of my wireframes on Adobe XD and designed a screen for each tab on the navigation bar. 
                            Try out my prototype below!
                        </ProjectDescription>
                        <ProjectiFrame title="prototype" width="550" height="812" src="https://xd.adobe.com/embed/2a82f344-ba18-4c2b-5a49-62387b90b3ce-5cb3/" frameborder="0" marginheight="2" allowfullscreen/>
                    <H2>Challenges</H2>
                    <ProjectDescription>
                        Since this was a project I was completing for class, I had a lot of time restraints in terms of getting everything done, so I was unable 
                        to complete a design for every screen within the app. It was also my first project working with Adobe XD and I came across some challenges 
                        during the process of creating my prototype. However, despite these challenges, I was able to access tutorials and forums to help me during 
                        the process.
                    </ProjectDescription>
                </ProjectContent>
            </ProjectContainer>
            <BottomNavigation
                back="/weschedule"
                next="/"
            />
            <Footer/>
        </div>
    )
}

export default CornerHealth;