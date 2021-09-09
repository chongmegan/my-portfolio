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
    font-size: 3.5rem;
    padding: .5rem;
    cursor: pointer;
    font-weight: bold;

    &:hover, &:focus {
        background: #ffffcc;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const ResumeLink = styled.a`
    font-family: 'Circular Std', Helvetica, sans-serif;
    color: #ffffff;
    font-size: 3.5rem;
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
    font-family: 'Circular Std', Helvetica, sans-serif;
    font-size: 2rem;
    color: #ffffff;
    padding: .7rem;
    display: block;
    text-align: center;

    &:hover {
        color: #ffffcc;
    }
`

export { 
    HeaderContainer,
    NavList,
    ResumeLink,
    NavigationLink,
    DropdownLink
}