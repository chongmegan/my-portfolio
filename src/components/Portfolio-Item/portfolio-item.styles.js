import styled from 'styled-components';

const PortfolioItemContainer = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 5rem;
    &:last-child {
        margin-bottom: 0;
    }
`

const PortfolioDescriptionContainer = styled.div`
    margin: auto 5rem;
`

const PortfolioImageContainer = styled.div`
    margin: auto;
`

const PortfolioImage = styled.img`
    width: 100%;
`

const PortfolioHeader = styled.h6`
    font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: 300;
	opacity: 0.3;
`

const PortfolioCompany = styled.h1`
    font-size: 3rem;
	font-weight: 300;
	margin: 1rem 0;
`

const PortfolioDescription = styled.p`
    font-size: 1.8rem;
	font-weight: 300;
`

const PortfolioLink = styled.a`
    display: inline-block;
	margin-top: 2.5rem;
	font-size: 1.5rem;
	text-transform: uppercase;
	color: #3883ff;
	transition: color 650ms;

    &:hover {
        color: #2f67cd;
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