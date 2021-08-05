import React from 'react';
import { 
    PortfolioItemContainer,
    PortfolioDescriptionContainer,
	PortfolioImageContainer,
	PortfolioImage,
	PortfolioHeader,
	PortfolioCompany,
	PortfolioDescription,
	PortfolioLink
} from './portfolio-item.styles';

const PortfolioItemEven = (props) => {
    const { descfade, descdelay, header, company, description, image, redirect, imgfade, imgdelay } = props

    return (
        <PortfolioItemContainer>	
			<PortfolioDescriptionContainer data-aos={descfade} data-aos-delay={descdelay}>
				<PortfolioHeader>{header}</PortfolioHeader>
				<PortfolioCompany>{company}</PortfolioCompany>
				<PortfolioDescription>{description}</PortfolioDescription>
				<PortfolioLink href={redirect}>View Details</PortfolioLink>
			</PortfolioDescriptionContainer>
            <PortfolioImageContainer data-aos={imgfade} data-aos-delay={imgdelay}>
				<PortfolioImage src={image} alt=""/>
			</PortfolioImageContainer>
		</PortfolioItemContainer>
    )
}

export { PortfolioItemEven };