import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { BottomNavigation } from '../components/Bottom-Navigation/BottomNav';
import {
    Homepage,
    HomepageLink,
    H1,
    ProjectContainer,
    ProjectContent,
    ProjectHeader,
    ProjectTags,
    ProjectOverview,
    H2,
    ProjectDescription
} from './Project.styles';

const RDGnu = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>

            <ProjectContainer>
                <ProjectContent>
                    <ProjectHeader>Resource Dilemma Game (rdgNU)</ProjectHeader>
                    <ProjectTags>UI/UX Design, Front-End Development</ProjectTags>
                    <ProjectOverview>
                        A web game application built for a psychological research study at Northeastern University on behavior and decision making. This application 
                        was built as a project through Sandbox, a student-led software consultancy at Northeastern, over the course of a semester. 
                    </ProjectOverview>
                    <H2>Project Scope and Overview</H2>
                    <ProjectDescription>
                        This web game application informally titled "Resource Dilemma Game (rdgNU)" was built over the course of a semester by our team at Sandbox, a 
                        student-led software consultancy at Northeastern. The scope of the game was defined by a psychological research group at Northeastern University
                        based on their current research, and essentially consisted of a game would they would use during a research study to study decision making and 
                        personal emotions. 
                        <br/>
                        <br/>
                        rdgNU is a multiplayer, co-op game where players choose an amount they would like to take from a shared pool of points, until the points run out. 
                        Points are replenished by 10% at the end of every round based on the number of points remaining in the shared pool. This is a game of strategy where 
                        players will need to consider the amount they take out every round, leaving enough for other players, and how many rounds of the game will be played 
                        in total. The game ultimately tests players based on their feelings during each round such as selfishness or conversely, their concern for others.
                    </ProjectDescription>
                    <H2>Users and Target Audience</H2>
                    <ProjectDescription>
                        Since this game application is designed for use in a psychological research study, the audience could be anyone that falls into the research study criteria. 
                        Knowing this, we had to create a straightforward and self-explanatory application that anyone would be able to use and wouldn't require a lot of time to learn
                        since psychology studies usually run in a limited amount of time. The overall game design was kept simple so it wouldn't confuse players or detract from the 
                        overall functionality of the game. 
                    </ProjectDescription>
                    <H2>Team and Role</H2>
                    <ProjectDescription>
                        I was the sole UI/UX designer working on a team composed of one project lead and three developers. I was in charge of the entirety of the design process: deciding 
                        on an overall design direction, user testing, moodboarding, wireframing, and prototyping. I worked closely with the developers and project lead, in order to create 
                        functional yet feasible designs that could be built within our timeframe. I attended multiple weekly meetings and stand-ups to update the team on my work as well as 
                        receive feedback from the team and our client in order to iterate on the designs and make any necessary adjustments. 
                    </ProjectDescription>
                    <H2>Design Process</H2>
                    <ProjectDescription>
                        When we first started the project, we received a rough timeline from the researchers and when they would need the application by. Since we were starting this game from 
                        scratch, I had to decide on an overall design direction immediately and mocking up game screens since the developers were unable to start until initial wireframes were 
                        created. I started by searching up inspiration and moodboarding since I had never designed anything for a game before. Based on all of the information and workflows, I 
                        was able to create a rough site map and begin working on mapping out all of the different screens we would need and also began creating low fidelity wireframes.
                    </ProjectDescription>
                    {/* insert site map photo and lo-fi wireframes */}
                    <H2>Design System and User Interface Design</H2>
                    <ProjectDescription>
                        The overall theme of this game was kept simple, utilizing 2 primary colors and 4 accent colors that were used for each of the players. I wanted the game to be eyecatching
                        and bright while also easy for users to be able to easily differentiate between the game components and so the game would be seem less like a psychological research study 
                        and more like a typical web game. I made sure that all text and graphics used on this game were at an accessible size and also made sure the colors would not be too similar 
                        as well as checking color contrasts to ensure everything was legible. Overall, I kept the game design minimal so as to not detract from the functionality and so that the 
                        developers on the team wouuld have a feasible end goal to reach within our timeline. 
                    </ProjectDescription>
                    {/* insert design system*/}
                    <ProjectDescription>
                        Once I decided on a design direction, I put together low fidelity wireframes using the design system I created including reusable UI components such as buttons, textboxes, 
                        and icons. After the lo-fi wireframes were created, I met with the developers to go over any iterations and finalize any changes before creating the hi-fi wireframes.
                    </ProjectDescription>
                    {/* insert lo-fi wireframes*/}
                    <ProjectDescription>
                        After I iterated on the lo-fi wireframes, I began designing the hi-fi wireframes so the developers could get started on creating a workable prototype for the research team to
                        test out. This step took a while as I was continuing to make iterations while the back-end was being programmed to ensure all of the screens flowed together and that all 
                        necessary components were designed including pop-up modals, forms and tool-tips. 
                    </ProjectDescription>
                    {/* insert hi-fi wireframes*/}
                    <H2>Outcome</H2>
                    <ProjectDescription>
                        At the end of the 4-5 months, our team was able to produce a fully functional psychological research game that is currently being used in an ongoing study conducted by the
                        researchers at Northeastern and we were able to incorporate many features including a live waiting room and individual user IDs so the researchers could keep track of all 
                        the participants and view their results. Overall, this was a very new experience for me and the first time I worked on a team of solely developers to create a game but I 
                        am extremely proud of what we were able to create given the packed timeline. 
                    </ProjectDescription>
                </ProjectContent>
            </ProjectContainer>

            <BottomNavigation
                back="/"
                next="/"
            />
            <Footer/>
        </div>
    );
}

export default RDGnu;