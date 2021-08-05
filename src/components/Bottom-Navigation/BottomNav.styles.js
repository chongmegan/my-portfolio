import styled from 'styled-components';

const ButtonContainer = styled.div`
    padding: 2rem;
	text-align: center;
`

const Back = styled.div`
    font-family: 'brother-1816', sans-serif;
	margin: 0 auto;
	font-size: 20px;
	clear: both;
	display: inline-block;
	margin: 7px;
    cursor: pointer;
`

const BackLink = styled.a`
    &:hover, &:focus {
        background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
	    transition: 200ms;
    }
`

const Next = styled.div`
    font-family: 'brother-1816', sans-serif;
	margin: 0 auto;
	font-size: 20px;
	clear: both;
	display: inline-block;
	margin: 7px;
    cursor: pointer;
`

const NextLink = styled.a`
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