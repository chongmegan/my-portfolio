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

const ArrowContainer = styled.div`
    text-align: center;
    margin-top: -10rem;
    padding-bottom: 5rem;
`

const Section = styled.section`
    padding: 6rem 0;
`

const Container = styled.div`
    width: 90%;
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
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
    ArrowContainer,
    Section,
    Container,
    PortfolioHeading,
    PortfolioHeadingText,
    PortfolioSubheading,
}