import React, {useState} from 'react';
import '../../App.css';
import { 
    HeaderContainer,
    NavList,
    NavigationLink,
    RedirectLink,
    DropdownLink
} from '../Header/Header.styles';

const Header = (props) => {

    const { height } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <HeaderContainer height={height}>
        <div className={`menu-toggler ${isOpen ? "open" : ""}`} onClick={toggle}>
            <div className="bar half start"/>
            <div className="bar"/>
            <div className="bar half end"/>
        </div>
        <nav className={`top-nav ${isOpen ? "nav-bar" && "open" : ""}`} onClick={toggle}>
            <NavList>
                <li> 
                    <NavigationLink to="/">Home</NavigationLink>
                </li>
                <li> 
                    <NavigationLink to="/about">About</NavigationLink>
                </li>
                <li>
                    <div className="dropdown"> 
                    <RedirectLink href="/#portfolio">Work</RedirectLink>
                    <div className="dropdown-content">
                        <DropdownLink to="/brigham">Brigham</DropdownLink>
                        <DropdownLink to="/bei-app">BEI App</DropdownLink>
                        <DropdownLink to="/booktoons">booktoons</DropdownLink>
                        <DropdownLink to="/rdgnu">rdgNU</DropdownLink>
                        <DropdownLink to="/worksense">Worksense</DropdownLink>
                        <DropdownLink to="/weschedule">WeSchedule</DropdownLink>
                        <DropdownLink to="/cornerhealth">Cornerhealth</DropdownLink>
                      </div>
                      </div>
                </li>
                <li>
                    <RedirectLink href="https://drive.google.com/file/d/1tvnEhuPp2Zj-w0lB2DMpZ7hUi1Wy10k9/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</RedirectLink>
                </li>
            </NavList>
        </nav>
        </HeaderContainer>
    );
};

export { Header };