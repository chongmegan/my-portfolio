import styled from 'styled-components';

const Homepage = styled.div`
    position: absolute;
    margin: 5rem 5rem 5rem 4rem;

    &:hover, &:focus {
        background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const H1 = styled.h1`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
`

const HomepageLink = styled.a`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-weight: 100;
    font-size: 23px;
    border-style: solid;
    border-width: 2px;
    padding: 5px;
`

const ProjectContainer = styled.div`
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: auto;
`

const ProjectContent = styled.div`
    justify-content: center;
`

const ProjectHeader = styled.h1`
    font-size: 30px;
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    padding-bottom: .5rem;
`

const ProjectTags = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    padding-bottom: 2rem;
`

const ProjectOverview = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 18px;
`

const ProjectDescription = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 18px;
`

const H2 = styled.h2`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 23px;
    padding: 2.5rem 0 1.5rem 0;
`

const ProjectList = styled.ul`
    list-style-type: disc;
    padding-top: 1.5rem;
    padding-left: 25px;
`

const ProjectListItem = styled.li`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    line-height: 140%;
    font-size: 18px;
    font-weight: 100;
`

const WebsiteLink = styled.a`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 18px;
    text-decoration: underline;

    &:hover {
        color: #0f2027;
        font-weight: 600;
        transition: 300ms;
    }
`

const ProjectImage = styled.img`
    padding-top: 3rem;
    padding-bottom: 1.5rem;
`

const ProjectPrototype = styled.div`
    padding: 1rem;
    justify-content: center;
`

const ProjectWireframe = styled.div`
    display: flex;
    align-items: center;
    max-width: 400px;
`

const ProjectiFrame = styled.iframe`
    margin: 0 auto;
    display: block;
    border: none;
`

export {
   Homepage,
   H1,
   HomepageLink,
   ProjectContainer,
   ProjectContent,
   ProjectHeader,
   ProjectTags,
   ProjectOverview,
   ProjectDescription,
   H2,
   ProjectList,
   ProjectListItem,
   WebsiteLink,
   ProjectImage,
   ProjectPrototype,
   ProjectWireframe,
   ProjectiFrame
}