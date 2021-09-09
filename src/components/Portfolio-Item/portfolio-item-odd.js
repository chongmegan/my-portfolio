import React from 'react';
import { 
    PortfolioItemContainer,
    OddPortfolioDescriptionContainer,
    PortfolioImageContainer,
    PortfolioImage,
    PortfolioHeader,
    PortfolioCompany,
    PortfolioDescription,
    PortfolioLink
} from './portfolio-item.styles';

const PortfolioItemOdd = (props) => {
    const { descfade, descdelay, header, company, description, image, redirect, imgfade, imgdelay } = props

    return (
        <PortfolioItemContainer>
            <PortfolioImageContainer data-aos={imgfade} data-aos-delay={imgdelay}>
                <PortfolioImage src={image} alt=""/>
            </PortfolioImageContainer>	
            <OddPortfolioDescriptionContainer data-aos={descfade} data-aos-delay={descdelay}>
                <PortfolioHeader>{header}</PortfolioHeader>
                <PortfolioCompany>{company}</PortfolioCompany>
                <PortfolioDescription>{description}</PortfolioDescription>
                <PortfolioLink href={redirect}>View Details</PortfolioLink>
            </OddPortfolioDescriptionContainer>
        </PortfolioItemContainer>
    )
}

export { PortfolioItemOdd };