import styled from 'styled-components';

const ButtonContainer = styled.div`
    padding: 8rem 0 4rem 0;
    text-align: center;
`

const Back = styled.div`
    margin: 0 auto;
    clear: both;
    display: inline-block;
    margin: 7px;
    cursor: pointer;
`

const BackLink = styled.a`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 20px;
    
    &:hover, &:focus {
        background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 200ms;
    }
`

const Next = styled.div`
    margin: 0 auto;
    clear: both;
    display: inline-block;
    margin: 7px;
    cursor: pointer;
`

const NextLink = styled.a`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 20px;

    &:hover, &:focus {
        background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 200ms;
    }
`

export {
    ButtonContainer,
    Back,
    BackLink,
    Next,
    NextLink
}