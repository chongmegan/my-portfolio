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
    ProjectOverview,
    ProjectDescription,
    WebsiteLink,
    LineBreak,
    H2,
    ProjectList,
    ProjectListItem,
    ProjectImage
} from './Project.styles';
import DesignStrategy1 from '../images/DesignStrategy-1.png';
import DesignStrategy2 from '../images/DesignStrategy-2.png';
import WorksenseLofi from '../images/WorksenseLo-fi.png';
import WorksenseHifi from '../images/WorksenseHi-fi.png';

const Worksense = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>

            <ProjectContainer>
                <ProjectHeader>Worksense Analytics</ProjectHeader>
                    <ProjectTags>Front End Development, React, Gatsby JS, Contentful CMS</ProjectTags><br/>
                <ProjectOverview>
                    As a part of Northeastern's student-led design studio, Scout, I had the opportunity to work with a talented team of designers and developers in bringing Worksense to life. Our team was assigned to help our client create an identity and completely rebrand their company. This 
                    included a brand new marketing website, logo, and design strategy that my team had to ideate and pitch in weekly client meetings.
                    <br/>
                    <br/>
                    Check out the live website <WebsiteLink href="https://worksenseanalytics.com/" target="_blank" rel="noopener noreferrer">here</WebsiteLink>!
                </ProjectOverview>
                <ProjectContent>
                    <H2>Overview</H2>
                    <ProjectDescription>
                        As one of the developers on this project, I was in charge of coding the marketing website and working closely alongside the designers to give critique as well as ensuring precise and accurate replication of their designs. I learned a lot working with my peers
                        and creating a working and polished product for a real-world client for the first time.
                    </ProjectDescription>
                    <br/>
                    <ProjectDescription>
                        These are some of the skills and tools that I used during this process:
                    </ProjectDescription>
                        <ProjectList>
                            <ProjectListItem>Figma (for wireframing and ideation)</ProjectListItem>
                            <ProjectListItem>React/Gatsby JS</ProjectListItem>
                            <ProjectListItem>Contentful CMS</ProjectListItem>
                            <ProjectListItem>Github</ProjectListItem>
                            <ProjectListItem>Weekly presentations and critique</ProjectListItem>
                        </ProjectList>
                    <LineBreak/>
                    <H2>Design Strategy</H2>
                        <ProjectDescription>
                            The process began with moodboarding and determining a design strategy that encapsulated the mission and goals of Worksense. After pitching numerous design directions to the clients, 
                            we finally decided on a natural and free-flowing design, inspired by warm and understated.
                        </ProjectDescription>
                    <ProjectImage src={DesignStrategy1} alt=""/>
                    <ProjectImage src={DesignStrategy2} alt=""/>
                    <LineBreak/>
                    <H2>Design Process</H2>
                        <ProjectDescription>
                            Creating lo-fi and hi-fi wireframes for this project required multiple iterations in order to keep up with the client's preferences while also deciding on what was feasible to complete within
                            the time frame of a single academic semester. As a developer, I attended multiple critiques and met with my team to determine our tech stack and delegate responsibilities throughout the project.
                            Here are a few examples of some of the wireframes that were created and iterated on throughout the project.
                        </ProjectDescription>
                        <ProjectImage src={WorksenseLofi} alt="Worksense Lo-fi Wireframes"/>
                        <ProjectImage src={WorksenseHifi} alt="Worksense Hi-fi Wireframes"/>
                    <LineBreak/>
                    <H2>Conclusion + Takeaways</H2>
                    <ProjectDescription>
                        This was one of the first projects that I ever completed for a real client on a team of developers and designers. I learned a lot about the design process and the
                        overall timeline of how a standard design project should follow and it was encouraging to be able to observe how other designers work as well understanding their thoughts, 
                        perspectives and personal aesthetics. This was my first time coding as well and jumping into a project of this caliber was definitely extremely challenging for me, but 
                        I learned more in the 5 months than I did previously and will continue to carry on this knowledge with me to future projects and jobs. 
                    </ProjectDescription>
                </ProjectContent>
            </ProjectContainer>

            <BottomNavigation
                back="/rdgnu"
                next="/weschedule"
            />
            <Footer/>
        </div>
    )
}

export default Worksense;