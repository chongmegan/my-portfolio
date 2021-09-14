import styled from 'styled-components';
import { devices } from '../devices';

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
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;

    @media ${devices.mobile} {
        font-size: 5rem;
        padding: 0;
    }
    @media ${devices.tablet} {
        font-size: 8rem;
        padding: 1rem;
    }
    @media ${devices.laptop} {
        font-size: 10rem;
    }
    @media ${devices.desktop} {
        font-size: 16rem;
    }
`

const LandingSubtext = styled.h6`
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 100;
    color: #0f2027;
    opacity: 80%;

    @media ${devices.mobile} {
        font-size: 13px;
    }
    @media ${devices.tablet} {
        font-size: 18px;
    }
    @media ${devices.laptop} {
        font-size: 2rem;
        padding-top: 1rem;
    }
    @media ${devices.desktop} {
        font-size: 2.5rem;
        padding-top: 1.5rem;
    }
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
    height: 100%;
    width: 90%;
    margin: 0 auto;
    position: relative;

    @media ${devices.laptop} {
        max-width: 80rem;
    }
    @media ${devices.desktop} {
        max-width: 120rem;
    }
`


export {
    LandingText,
    LandingName,
    LandingSubtext,
    ArrowContainer,
    Section,
    Container
}