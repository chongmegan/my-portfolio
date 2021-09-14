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

const NavigationLink = styled(Link)`
    font-family: 'Circular Std', Helvetica, sans-serif;
    color: #ffffff;
    font-size: 30px;
    padding: .5rem;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;

    &:hover, &:focus {
        color: #FDF0D5;
    }
`

const RedirectLink = styled.a`
    font-family: 'Circular Std', Helvetica, sans-serif;
    color: #ffffff;
    font-size: 30px;
    padding: .5rem;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;

    &:hover, &:focus {
        color: #FDF0D5;
    }
`

const DropdownLink = styled(Link)`
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-size: 2rem;
    color: #ffffff;
    padding: 1rem 0 0 1rem;
    display: block;

    &:hover {
        color: #FDF0D5;
    }
`

export { 
    HeaderContainer,
    NavList,
    RedirectLink,
    NavigationLink,
    DropdownLink
}