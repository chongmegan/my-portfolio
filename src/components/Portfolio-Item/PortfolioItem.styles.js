import styled from 'styled-components';
import { devices } from '../../devices';

const PortfolioItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rem;
    
    @media ${devices.mobile} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  @media ${devices.tablet} {
    flex-wrap: nowrap;
    flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  }
`

const PortfolioDescriptionContainer = styled.div`
    @media ${devices.mobile} {
        margin: auto 5rem auto 5rem;
    }
    @media ${devices.tablet} {
        margin: auto 3rem auto 3rem;
    }
    @media ${devices.laptop} {
        margin: auto 5rem auto 5rem;
    }
`

const PortfolioImageContainer = styled.div`
    margin: auto;
`

const PortfolioImage = styled.img`
    height: 100%;
    max-height: 340px;
    overflow: hidden;
    object-fit: cover;

    @media ${devices.mobile} {
        width: 250px;
    }
    @media ${devices.tablet} {
        width: 340px;
    }
    @media ${devices.laptop} {
        width: 475px;
    }
    @media ${devices.desktop} {
        width: 575px;
    }
`

const PortfolioHeader = styled.h6`
    text-transform: uppercase;
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 300;
    opacity: 35%;

    @media ${devices.mobile} {
        font-size: 1.2rem;
        padding-top: 2rem;   
    }
    @media ${devices.tablet} {
        font-size: 1.1rem;
        padding-top: 0;
    }
    @media ${devices.laptop} {
        font-size: 1.3rem;
    }
    @media ${devices.desktop} {
        font-size: 1.5rem;
    }
`

const PortfolioCompany = styled.h1`
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 600;
    color: #203a43;

     @media ${devices.mobile} {
        font-size: 2rem;
        padding-bottom: .5rem;
    }
    @media ${devices.tablet} {
        font-size: 2.2rem;
        padding-bottom: 0;
        margin: 1rem 0;
    }
    @media ${devices.laptop} {
        font-size: 2.6rem;
    }
    @media ${devices.desktop} {
        font-size: 3rem;
    }
`

const PortfolioDescription = styled.p`
    font-family: 'Circular Std', Helvetica, sans-serif;

    @media ${devices.mobile} {
        font-size: 1.3rem;
    }
    @media ${devices.laptop} {
        font-size: 1.6rem;
    }
    @media ${devices.desktop} {
        font-size: 1.8rem;
    }
`

const PortfolioLink = styled.a`
    display: inline-block;
    font-family: 'Circular Std', Helvetica, sans-serif;
    text-transform: uppercase; 
    color: #4690AE;
    transition: color 600ms;

    &:after {
        content: '>';
        opacity: 0;
        position: absolute;
    }

    &:hover {
        color: #0f2027;
        transition: 600ms;
    }

    &:hover:after {
        opacity: 1;
        transition: 600ms;
        bottom: 1px;
        right: 41rem;
    }

    @media ${devices.mobile} {
        font-size: 1.2rem;
        margin-top: 2.3rem;  
    }
    @media ${devices.desktop} {
        font-size: 1.5rem;
        margin-top: 2.5rem;
    }
`

export { 
    PortfolioItemContainer,
    PortfolioDescriptionContainer,
    PortfolioImageContainer,
    PortfolioImage,
    PortfolioHeader,
    PortfolioCompany,
    PortfolioDescription,
    PortfolioLink
 }