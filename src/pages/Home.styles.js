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
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 1rem;
    user-select: none;
`

const LandingSubtext = styled.h6`
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
    color: #0f2027;
    opacity: 70%;
    padding-top: 1rem;
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


export {
    LandingText,
    LandingName,
    LandingSubtext,
    ArrowContainer,
    Section,
    Container
}