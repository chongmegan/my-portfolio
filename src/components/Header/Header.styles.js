import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    width: 100%;
    height: ${(props) => props.height};
`

const NavList = styled.ul`
    list-style: none;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const NavigationLink = styled.a`
    font-family: 'Montserrat', sans-serif;
	color: #ffffff;
	font-size: 5rem;
	padding: .5rem;
    cursor: pointer;
    font-weight: bold;

    &:hover, &:focus {
        background: #ffffcc;
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
    }
`

const DropdownLink = styled(Link)`
    font-family: Montserrat;
	font-size: 2.5rem;
	color: #ffffff;
	padding: 1rem;
	display: block;

    &:hover {
        color: #ffffcc;
    }
`

export { 
    HeaderContainer,
    NavList,
    NavigationLink,
    DropdownLink
}