import styled from 'styled-components';

const AboutContainer = styled.div`
    display: flex;
    max-width: 120rem;
    align-items: top;
    margin: 0 auto;
    position: relative;
    padding-top: 4rem;
    padding-bottom: 8rem;
`
const ProfileImgContainer = styled.div`
    margin-left: 5rem;
`

const ProfileImg = styled.img`
    width: 100%;
    max-width: 500px;
    height: 500px;
    flex: 1;
`

const AboutDetails = styled.div`
    flex: 1;
`

const HeadingText = styled.h1`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 6rem;
    text-transform: uppercase;
    color: #808080;
    opacity: 20%;
`

const AboutText = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 100;
    text-align: left;
    padding-bottom: 6rem;
    line-height: 1.5;
`

const CurrentList = styled.ul`
    list-style: square;
    margin-left: 2rem;
    padding-top: 1rem;
`

const CurrentListItem = styled.li`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    padding-bottom: 2rem;
`

const SocialMedia = styled.div`
    margin-top: 2rem;
`

const SocialMediaRow = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: left;
`

const Item = styled.li`
    margin: 0 1rem;

    &:first-child {
        margin: 0 1rem 0 0;
    }
`

const SocialMediaLink = styled.a`
    text-decoration: none;
`

const LinkedInIcon = styled.i`
    font-size: 4rem;
    color: #203a43;
    transition: color 500ms;

    &:hover {
        color: #0e76a8;
    }
`
const GmailIcon = styled.i`
    font-size: 4rem;
    color: #203a43;
    transition: color 500ms;

    &:hover {
        color: #c71610;
    }
`

const GithubIcon = styled.i`
    font-size: 4rem;
    color: #203a43;
    transition: color 500ms;

    &:hover {
        color: #333333;
    }
`


export {
    AboutContainer,
    ProfileImgContainer,
    ProfileImg,
    AboutDetails,
    HeadingText,
    AboutText,
    CurrentList,
    CurrentListItem,
    SocialMedia,
    SocialMediaLink,
    SocialMediaRow,
    Item,
    LinkedInIcon,
    GithubIcon,
    GmailIcon
}