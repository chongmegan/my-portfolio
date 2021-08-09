import styled from 'styled-components';

const LandingText = styled.div`
    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	text-align: center;
	z-index: 1;
`

const LandingName = styled.h1`
    font-size: 16rem;
	font-family: 'aktiv-grotesk', sans-serif;
	background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	padding: 1rem;
	user-select: none;
`

const LandingSubtext = styled.h6`
    font-size: 2.5rem;
	font-weight: 300;
	font-family: 'aktiv-grotesk', sans-serif;
`

const Section = styled.section`
    padding: 6rem 0;
`

const AboutContainer = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
    width: 90%;
	max-width: 120rem;
	height: 100%;
	margin: 0 auto;
	position: relative;
`

const Container = styled.div`
    width: 90%;
	max-width: 120rem;
	height: 100%;
	margin: 0 auto;
	position: relative;
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

const PortfolioHeading = styled.div`
    text-align: center;
	margin-bottom: 7rem;
`

const PortfolioHeadingText = styled.h1`
    font-size: 3.5rem;
	color: rgba(0, 0, 0, 1);
	text-transform: uppercase;
	font-weight: 300;
	position: relative;
	margin-bottom: 1rem;

    ::before {
        content: '';
	    position: absolute;
	    bottom: -.5rem;
	    left: 50%;
	    transform: translateX(-50%);
	    background-color: rgba(0, 0, 0, 0.75);
        width: 10rem;
	    height: 3px;
	    border-radius: .8rem;
    }

    ::after{
        content: '';
	    position: absolute;
	    bottom: -.5rem;
	    left: 50%;
	    transform: translateX(-50%);
	    background-color: rgba(0, 0, 0, 0.75);
    }
`

const PortfolioSubheading = styled.h6`
    font-size: 1.6rem;
	font-weight: 300;
`

export {
    LandingText,
    LandingName,
    LandingSubtext,
    Section,
    AboutContainer,
    Container,
    ProfileImgContainer,
    ProfileImg,
    AboutDetails,
    AboutHeading,
    AboutHeadingFirst,
    AboutHeadingSecond,
    AboutText,
    SocialMedia,
    SocialMediaRow,
    Item,
    SocialMediaLink,
    FacebookIcon,
    LinkedInIcon,
    GmailIcon,
    GithubIcon,
    PortfolioHeading,
    PortfolioHeadingText,
    PortfolioSubheading,
}