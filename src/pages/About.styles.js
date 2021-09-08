import styled from 'styled-components';

const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
    padding-top: 4rem;
    padding-bottom: 8rem;
`
const ProfileImgContainer = styled.div`
    margin-right: 5rem;
`

const ProfileImg = styled.img`
    width: 100%;
    flex: 1;
`

const AboutDetails = styled.div`
    flex: 1;
`

const AboutHeading = styled.div`
    text-align: center;
    text-transform: uppercase;
    line-height: 0;
    margin-bottom: 6rem;
`

const AboutHeadingFirst = styled.h1`
    font-size: 10rem;
    color: #203a43;
    opacity: .40;
`

const AboutHeadingSecond = styled.h6`
    font-size: 2.5rem;
    font-weight: 300;
`

const AboutText = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
`

const SocialMedia = styled.div`
    margin-top: 5rem;
`

const SocialMediaRow = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Item = styled.li`
    margin: 0 2rem;
`

const SocialMediaLink = styled.a`
    text-decoration: none;
    color: #000000;
`

const FacebookIcon = styled.i`
    font-size: 5rem;
    transition: color 650ms;

    &:hover {
        color: #4267b2;
    }
`

const LinkedInIcon = styled.i`
    font-size: 5rem;
    transition: color 650ms;

    &:hover {
        color: #0e76a8;
    }
`
const GmailIcon = styled.i`
    font-size: 5rem;
    transition: color 650ms;

    &:hover {
        color: #c71610;
    }
`

const GithubIcon = styled.i`
    font-size: 5rem;
    transition: color 650ms;

    &:hover {
        color: #333333;
    }
`


export {
    AboutContainer,
    ProfileImgContainer,
    ProfileImg,
    AboutDetails,
    AboutHeading,
    AboutHeadingFirst,
    AboutHeadingSecond,
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