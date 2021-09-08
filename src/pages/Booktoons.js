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
    H2,
    ProjectDescription,
    WebsiteLink
} from './Project.styles';

const Booktoons = () => {
    return (
        <div>
            <Homepage>
                <H1><HomepageLink href="/">Megan Chong</HomepageLink></H1>
            </Homepage>
            <Header height="20vh"/>

            <ProjectContainer>
                <ProjectContent>
                    <ProjectHeader>booktoons || HackBeanpot 2021</ProjectHeader>
                    <ProjectTags>UI/UX Design, Front End Development, Web Development</ProjectTags>
                    <ProjectOverview>
                        booktoons was developed over a weekend at Boston hackathon. When coming up the idea for booktoons, we took into account all of our passions 
                        for reading and music. We considered how all movies and tv shows tend to have soundtracks and movies are typically derived from books. Additionally,
                        many people also tend to listen to some type of playlist or soundtrack in the background while reading. From this, we decided to create a website 
                        that would generate a soundtrack (playlist) for your current read and thus booktoons was born.
                        <br/>
                        <br/>
                        Try out our live website <WebsiteLink href="https://jzhzhang66.github.io/hackbeanpot2021/#/" target="_blank" rel="noopener noreferrer">here</WebsiteLink>!
                    </ProjectOverview>
                    <H2>Functionality</H2>
                    <ProjectDescription>
                        booktoons is essentially a website that allows readers to type in a name of any book they are currently reading along with their top 3 favorite music
                        artists and the site will automatically generate a playlist for your reading session based on the book and musical preferences. This was accomplished 
                        through the use of many APIs such as the Google Books API which pulls the book's description, the IBM Watson API which scans the book description and 
                        locates keywords that evoke a certain overall "mood/tone" of the book, as well as the Spotify API which gives information on various aspects of a song 
                        (ex: energy, valence, tempo, etc.) and allows access to the entire music catalogue on Spotify.
                    </ProjectDescription>
                    <H2>Branding</H2>
                    <ProjectDescription>
                        Our team decided on the name "booktoons" as a way of combining reading and music through "book" and "tunes". We decided on the spelling of "toons" as 
                        oppposed to "tunes" to create symmetry with the double "o's" and to create a more playful name overall.
                    </ProjectDescription>
                    {/* Insert logo */}
                    <H2>Project Design</H2>
                    <ProjectDescription>
                        As the lead designer on the team, I decided to go for a more minimal and simplistic design given the timeframe for the project, however still being able 
                        to encapsulate the themes of music and reading. The logo is made up of two eigth notes where a book spine serves as the beam connecting the two notes. The
                        overall color palette was also kept simple, using neutral colors such as cream and black with a muted green accent color to add a touch of playfulness. The 
                        project design and wireframes were also kept simple and straightforward, to avoid any clutter and only keeping what is essential to the functionality and 
                        focus of the website.
                    </ProjectDescription>
                    {/* Insert design system */}
                    <H2>Building Process</H2>
                    <ProjectDescription>
                        To start off with the project, we first figured out all of the APIs we would be using as well as the tech stack. We decided on the Google Books, Spotify, and 
                        IBM Watson APIs. From there we were able to set up the environment including a Github repository and Figma workspace for the team. I mainly worked on creating 
                        the design system for this app as well as developing the front-end. The front-end of this project was built with React and the back-end was built with axios, 
                        node.js, and express. Once all of the wireframes were created and developement was complete, the project was deployed using Github Pages.
                    </ProjectDescription>
                    <H2>Accomplishments</H2>
                    <ProjectDescription>
                        Our project, booktoons, was chosen as a Hackathon winner and as a group of first-time "hackers" we are extremely proud of everything we were able to achieve in 
                        the span of a weekend. In the short amount of time, we were able to build a functional, and aesthetically pleasing website that we were all happy with at the end. 
                        As a team, we also learned a lot, not only improving all of our technical skills but also on working closely with a team in a high pressure environment. It was also 
                        our first time using node.js and express as well as using React on a more involved level, so I am extremely impressed by how we were all able to pull this off with 
                        some encouragement from each other and help from Stack Overflow (of course).
                    </ProjectDescription>
                    <H2>Future Steps for booktoons</H2>
                    <ProjectDescription>
                        We believe there is a lot of potential for booktoons to continue to develop and become an app that is widely used by readers everywhere. We received lots of positive 
                        feedback from friends and users and people looking for this to become part of their reading routine (there's nothing more exciting than finding new music). As for the 
                        website itself, there are still many bugs to iron out and improvements to be made. For example, getting rid of duplicate search results, further refinement for searches, 
                        shorter loading times, and addressing edge cases. Additionally, it would be nice to introduce more features to the website such as drop-down options, search suggestions,
                        as well as taking the website "playlist" and directly creating a Spotify playlist for the user to add to their library.
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

export default Booktoons;