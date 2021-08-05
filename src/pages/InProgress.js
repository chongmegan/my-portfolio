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
	H2,
	ProjectList,
	ProjectListItem
} from './Project.styles';

const InProgress = () => {
    return(
        <div>
			<Homepage>
				<H1 id="logo"><HomepageLink href="/">Megan Chong</HomepageLink></H1>
			</Homepage>
			<Header height="20vh"/>

		        <ProjectContainer>
			        <ProjectContent>
				        <ProjectHeader>Media and Design Co-op</ProjectHeader>
					    <ProjectTags>Graphic Design, Web Development</ProjectTags><br/>   
				        <ProjectDescription>Co-oping at Brigham and Women's hospital for Spring 2020 and Summer 1 semester. Stay tuned for updates!</ProjectDescription>
                	</ProjectContent>
                </ProjectContainer>

			<ProjectContainer>
				<ProjectContent>
					<ProjectHeader>Symphony Church Graphics</ProjectHeader>
						<ProjectTags>Graphic Design, Illustration</ProjectTags><br/>
					<ProjectDescription>I am currently a part of graphic design team at Symphony church and am in charge of creating biweekly graphics for our announcements slides,
						social media posts and graphics for various events. My work includes the use of various programs such as Adobe Illustrator, Photoshop, Figma, Canva, and Procreate.
					</ProjectDescription>
					<div>
						<H2>Currently Working On -</H2>
						<ProjectList>
							<ProjectListItem>Weekly sermon presentation slides</ProjectListItem>
							<ProjectListItem>Program templates</ProjectListItem>
						</ProjectList>
					</div>
				</ProjectContent>
			</ProjectContainer>

			<ProjectContainer>
				<ProjectContent>
					<ProjectHeader>Personal Online Portfolio</ProjectHeader>
						<ProjectTags>HTML/CSS, React</ProjectTags><br/>
						<ProjectDescription>
							I created this online portfolio to compile all of my work and future projects I will complete. I coded this website from scratch using HTML, CSS and basic JavaScript 
							to create a portfolio that fit the design I envisioned. When I began creating this website, I knew that I would need the basic components to introduce myself and create a space to display 
							my work. To write my code I use Visual Studio code and host my website from Github pages.
						</ProjectDescription>
					<div>
						<H2>Currently working on -</H2>
						<ProjectList>
							<ProjectListItem>Updating my website to use React instead of just HTML and CSS</ProjectListItem>
							<ProjectListItem>Brainstorming new features I can include and old features I can improve on</ProjectListItem>
							<ProjectListItem>Creating a photo gallery to display my film photography</ProjectListItem>
						</ProjectList>
					</div>
					<div>
						<H2>Challenges -</H2>
						<ProjectDescription>
							Starting this website from scratch included many obstacles I had to overcome, such as the fact that I had never coded anything with HTML/CSS before and am currently in the process of learning 
							React since I have since become more comfortable HTML/CSS. A lot of this website was trial-and-errorbut eventually I started to pick up new skills from tutorials and design communities I joined. There is 
							still a lot of room for improvement and cleaning up my code, but this portfolio is a continuous project that I will work on to improve and tweak as I go along.
						</ProjectDescription>
					</div>
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

export default InProgress;