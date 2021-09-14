import styled from 'styled-components';

const Homepage = styled.div`
    position: absolute;
    margin: 5.5rem 5rem 5rem 8rem;
`

const H1 = styled.h1`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #203a43;
    text-transform: uppercase;
`

const HomepageLink = styled.a`
    &:hover, &:focus {
        font-size: 21px;
        transition: 600ms;  
    }
`

const ProjectContainer = styled.div`
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: auto;
`

const ProjectContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const ProjectHeader = styled.h1`
    font-size: 30px;
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    color: #203a43;
    padding-bottom: .5rem;
`

const ProjectTags = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 16px;
    opacity: 35%;
    padding-bottom: 2rem;
`

const ProjectOverview = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 18px;
    line-height: 1.5;
`

const ProjectDescription = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 18px;
    width: 50%;
    margin-left: auto;
    line-height: 1.5;
`

const H2 = styled.h2`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 23px;
    padding: 2.5rem 0 1.5rem 0;
    z-index: 1;
    position: relative;
    top: 40px;
`

const LineBreak = styled.div`
    display: block;
    margin: 80px 250px 30px 250px;
    border-bottom: 2px solid #c1c1c1;
}
`

const ProjectList = styled.ul`
    list-style-type: square;
    padding-top: 1rem;
    margin-left: 480px;
`

const MainProjectList = styled.ul`
    list-style-type: square;
    padding-top: 1rem;
    padding-bottom: 5rem;
    max-width: 900px;
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
    padding-bottom: 3rem;
    width: 100%;
`

const ProjectiFrame = styled.iframe`
    margin: 0 auto;
    display: block;
    border: none;
    padding-top: 2rem;
`

const IndividualSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 500px;
    object-fit: cover;
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
   LineBreak,
   ProjectList,
   MainProjectList,
   ProjectListItem,
   WebsiteLink,
   ProjectImage,
   ProjectiFrame,
   IndividualSlide
}