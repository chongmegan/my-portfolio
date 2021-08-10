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
    font-family: 'fieldwork', 'arial',  sans-serif;
    font-weight: 400;
`

const HomepageLink = styled.a`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 23px;
    border-style: solid;
    border-width: 2px;
    padding: 5px;
    border-radius: 6px;
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
    font-size: 38px;
`

const ProjectTags = styled.p`
    text-transform: uppercase;
    font-size: 16px;
`

const ProjectDescription = styled.p`
    font-size: 18px;
    padding-bottom: 2rem;
`

const H2 = styled.h2`
    font-weight: 500;
    font-size: 23px;
    padding: 2.5rem 0 1.5rem 0;
`

const ProjectList = styled.ul`
    font-family: 'brother-1816', arial, sans-serif;
    line-height: 130%;
    font-size: 18px;
    font-weight: 1;
    list-style-type: disc;
    padding-bottom: 40px;
    padding-left: 25px;
`

const ProjectListItem = styled.li`
    font-size: 17px;
`

const WebsiteLink = styled.a`
    font-family: brother-1816, arial, sans-serif;
    font-size: 17px;
    text-decoration: underline;

    &:hover {
        color: #0f2027;
        font-weight: 600;
        transition: 200ms;
    }
`

const ProjectImage = styled.img`
    padding-top: 1rem;
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