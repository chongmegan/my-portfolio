import styled from 'styled-components';

const PortfolioItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rem;
`

const EvenPortfolioDescriptionContainer = styled.div`
    margin: auto 5rem auto 0;
`

const OddPortfolioDescriptionContainer = styled.div`
    margin: auto 0 auto 5rem;
`

const PortfolioImageContainer = styled.div`
    margin: auto;
`

const PortfolioImage = styled.img`
    width: 575px;
    height: 100%;
    max-height: 340px;
    overflow: hidden;
    object-fit: cover;
`

const PortfolioHeader = styled.h6`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 300;
    opacity: 35%;
`

const PortfolioCompany = styled.h1`
    font-size: 3rem;
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-weight: 600;
    color: #203a43;
    margin: 1rem 0;
`

const PortfolioDescription = styled.p`
    font-size: 1.8rem;
    font-family: 'Circular Std', Helvetica, sans-serif;
`

const PortfolioLink = styled.a`
    display: inline-block;
    font-family: 'Circular Std', Helvetica, sans-serif;
    margin-top: 2.5rem;
    font-size: 1.5rem;
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
        right: 46rem;
    }
`

export { 
    PortfolioItemContainer,
    EvenPortfolioDescriptionContainer,
    OddPortfolioDescriptionContainer,
    PortfolioImageContainer,
    PortfolioImage,
    PortfolioHeader,
    PortfolioCompany,
    PortfolioDescription,
    PortfolioLink
 }