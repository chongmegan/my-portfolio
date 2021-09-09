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

const AboutHeading = styled.div`
    text-transform: uppercase;
`

const AboutHeadingText = styled.h1`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 6rem;
    color: #203a43;
    opacity: 20%;
`

const AboutText = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: 100;
    text-align: left;
`

const SocialMedia = styled.div`
    margin-top: 5rem;
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
    color: #000000;
`

const FacebookIcon = styled.i`
    font-size: 4rem;
    color: #203a43;
    transition: color 500ms;

    &:hover {
        color: #4267b2;
    }
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
    AboutHeadingText,
    AboutHeading,
    AboutText,
    SocialMedia,
    SocialMediaLink,
    SocialMediaRow,
    Item,
    FacebookIcon,
    LinkedInIcon,
    GithubIcon,
    GmailIcon
}