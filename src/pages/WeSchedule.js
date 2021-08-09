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
    ProjectWireframe
} from './Project.styles';
import Brainstorming from '../images/brainstorming.jpg';
import Interview from '../images/interview.jpg';
import SiteMap from '../images/site-map.jpg';
import ColorPalette from '../images/color-palette.jpg';
import TypeStudy from '../images/type-study.jpg';
import Logo1 from '../images/logo-1.jpg';
import Logo2 from '../images/logo-2.jpg';
import LofiWireframe1 from '../images/lo-fi-wireframe-1.jpg';
import LofiWireframe2 from '../images/lo-fi-wireframe-2.jpg';
import HifiWireframe1 from '../images/hi-fi-wireframe-1.jpg';
import HifiWireframe2 from '../images/hi-fi-wireframe-2.jpg';

const WeSchedule = () => {
    return (
        <div>
            <Homepage>
				<H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
			</Homepage>
            <Header height="20vh"/>

            <ProjectContainer>
			<ProjectContent>
				<ProjectHeader>WeSchedule</ProjectHeader>
					<ProjectTags>UI/UX Design, User Research</ProjectTags><br/>
				<ProjectDescription>
                    As a college student who is constantly moving from place to place every year, it can be hard to transition. Often we find ourselves with 
                    new roommates, housemates, sublets, etc. and it can be hard to effectively communicate all of your expectations and goals of living together. This is where WeSchedule comes in.
                </ProjectDescription>
                <ProjectDescription>Link to the <WebsiteLink href="https://www.figma.com/proto/ZttTHpnOaEUANC1eXzEzVK/Homepage-Hi-Fi-Wireframes?node-id=131%3A58&scaling=min-zoom" target="_blank" rel="noopener noreferrer">clickable prototype</WebsiteLink>.</ProjectDescription>
                
				<div>
					<H2>Overview</H2>
					<ProjectDescription>Going into this project, I was inspired by the everyday problems and situations I find myself in. I found myself spending a majority of my time at home with my roommates, and given 
                        the pandemic, I know I am not the only one. My roommates and I constantly had to remind each other about chores and responsibilities and we also all struggled with finding time to 
                        meet up and discuss household expectations, which resulted in many conflicts. I researched potential scheduling tools or applications that my roommates and I could use and struggled
                        to find one that truly encapsulated all of our needs. So, I decided to design an application that could tackle all of the challenges that come with living with others.
					</ProjectDescription><br/>
						<ProjectDescription>My Design Process -</ProjectDescription>
							<ProjectList>
                                <ProjectListItem>Brainstorming</ProjectListItem>
                                <ProjectListItem>Interviews</ProjectListItem>
                                <ProjectListItem>Site Map</ProjectListItem>
								<ProjectListItem>Typography and Color Research</ProjectListItem>
                                <ProjectListItem>Identity Mark and Logo</ProjectListItem>
                                <ProjectListItem>Lo-fi and Hi-fi Wireframing</ProjectListItem>
                                <ProjectListItem>Critique and User Testing</ProjectListItem>
						</ProjectList>
                </div>
                
				<div>
					<H2>Brainstorming and Interviews -</H2>
						<ProjectDescription>
                            I jotted down my general ideas and things I wanted to accomplish in my application. I also conducted interviews with 3 people who fit into targetted persona, finding out about pain points,
                            personal experiences, and any workflows they would be beneficial to them. During this part of the process, I was able to flesh out all of my user stories and desired workflows for the application.
						</ProjectDescription>
				</div>
				<div>
					<ProjectImage src={Brainstorming} alt=""/>
					<ProjectImage src={Interview} alt=""/>
                </div>
					<H2>Site Map -</H2>
					<ProjectImage src={SiteMap} alt=""/>
					<H2>Brand Identity and Logo Ideation -</H2>
					<ProjectImage src={ColorPalette} alt=""/>
					<ProjectImage src={TypeStudy} alt=""/>
                <ProjectWireframe>
					<ProjectImage src={Logo1} alt=""/>
					<ProjectImage src={Logo2} alt=""/>
                </ProjectWireframe>

					<H2>Lo-fi and Hi-fi Wireframing -</H2>
				<ProjectWireframe>
					<ProjectImage src={LofiWireframe1} alt=""/>
					<ProjectImage src={LofiWireframe2} alt=""/>
                </ProjectWireframe>
                <ProjectWireframe>
					<ProjectImage src={HifiWireframe1} alt=""/>
					<ProjectImage src={HifiWireframe2} alt=""/>
                </ProjectWireframe>
                </ProjectContent>
			</ProjectContainer>
            <BottomNavigation
            next="/cornerhealth"
            back="/worksense"
            />
            <Footer/>
        </div>
    )
}

export default WeSchedule;