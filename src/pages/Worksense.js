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
    WebsiteLink,
    H2,
    ProjectList,
    ProjectListItem,
    ProjectImage,
    ProjectPrototype,
    ProjectWireframe
} from './Project.styles';
import DesignStrategy1 from '../images/DesignStrategy-1.png';
import DesignStrategy2 from '../images/DesignStrategy-2.png';
import WorksenseHifi1 from '../images/WorksenseHifi-1.png';
import WorksenseHifi2 from '../images/WorksenseHifi-2.png';

const Worksense = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>
            <ProjectContainer>
            <ProjectContent>
                <ProjectHeader>Worksense Analytics</ProjectHeader>
                    <ProjectTags>Front End Development, React, Gatsby JS, Contentful CMS</ProjectTags><br/>
                <ProjectDescription>As a part of Northeastern's student-led design studio, Scout, I had the opportunity to work with a talented team of designers and developers in bringing Worksense to life. Our team was assigned to help our client create an identity and completely rebrand their company. This 
                    included a brand new marketing website, logo, and design strategy that my team had to ideate and pitch in weekly client meetings.
                </ProjectDescription>
                <ProjectDescription>
                    Check out the live website <WebsiteLink href="https://worksenseanalytics.com/" target="_blank" rel="noopener noreferrer">here</WebsiteLink>!
                </ProjectDescription>
                <div>
                    <H2>Overview</H2>
                    <ProjectDescription>As one of the developers on this project, I was in charge of coding the marketing website and working closely alongside the designers to give critique as well as ensuring precise and accurate replication of their designs. I learned a lot working with my peers
                        and creating a working and polished product for a real-world client for the first time.
                    </ProjectDescription><br/>
                        <ProjectDescription>T
                            hese are some of the skills and tools that I used during this process:
                        </ProjectDescription>
                            <ProjectList>
                                <ProjectListItem>Figma (for wireframing and ideation)</ProjectListItem>
                                <ProjectListItem>React/Gatsby JS</ProjectListItem>
                                <ProjectListItem>Contentful CMS</ProjectListItem>
                                <ProjectListItem>Github</ProjectListItem>
                                <ProjectListItem>Weekly presentations and critique</ProjectListItem>
                            </ProjectList>
                </div>
                <div>
                    <H2>Design Strategy -</H2>
                        <ProjectDescription>
                            The process began with moodboarding and determining a design strategy that encapsulated the mission and goals of Worksense. After pitching numerous design directions to the clients, we finally decided on 
                            a natural and free-flowing design, inspired by warm and understated.
                        </ProjectDescription>
                </div>
                    <ProjectImage src={DesignStrategy1} alt=""/>
                    <ProjectImage src={DesignStrategy2} alt=""/>
                <ProjectPrototype>
                    <div class="description">
                        <H2>Hi-fi Wireframes -</H2>
                        <ProjectDescription>Creating lo-fi and hi-fi wireframes for this project required multiple iterations in order to keep up with the client's preferences while also deciding on what was feasible to complete within
                            the time frame of a single academic semester. As a developer, I attended multiple critiques and met with my team to determine our tech stack and delegate responsibilities throughout the project.
                            Here are a few examples of some of the wireframes that were created and iterated on throughout the project.
                        </ProjectDescription>
                    </div>
                    <ProjectWireframe>
                        <ProjectImage src={WorksenseHifi1} alt=""/>
                        <ProjectImage src={WorksenseHifi2} alt=""/>
                    </ProjectWireframe>
                </ProjectPrototype>
                </ProjectContent>
            </ProjectContainer>
            <BottomNavigation
            next="/weschedule"
            back="/in-progress"
            />
            <Footer/>
        </div>
    )
}

export default Worksense;