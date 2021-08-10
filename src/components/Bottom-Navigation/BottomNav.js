import React from 'react';
import { 
    ButtonContainer,
    Back,
    BackLink,
    Next,
    NextLink
} from './BottomNav.styles';

const BottomNavigation = (props) => {
    const { back, next } = props;

    return (
        <ButtonContainer>
            <Back>
                <BackLink href={back}>&larr; Back</BackLink>
            </Back>
            <Next>
                <NextLink href={next}>Next &rarr;</NextLink>
            </Next>
        </ButtonContainer>
    )
}

export { BottomNavigation };