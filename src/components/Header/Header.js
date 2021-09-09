import React, {useState} from 'react';
import '../../App.css';
import { 
    HeaderContainer,
    NavList,
    NavigationLink,
    ResumeLink,
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
                    <NavigationLink href="#portfolio">Portfolio</NavigationLink>
                    <div className="dropdown-content">
                        <DropdownLink to="/brigham" target="_blank">Brigham</DropdownLink>
                        <DropdownLink to="/bei-app" target="_blank">BEI App</DropdownLink>
                        <DropdownLink to="/booktoons" target="_blank">booktoons</DropdownLink>
                        <DropdownLink to="/rdgnu" target="_blank">rdgNU</DropdownLink>
                        <DropdownLink to="/worksense" target="_blank">Worksense</DropdownLink>
                        <DropdownLink to="/weschedule" target="_blank">WeSchedule</DropdownLink>
                        <DropdownLink to="/cornerhealth" target="_blank">Cornerhealth</DropdownLink>
                      </div>
                      </div>
                </li>
                <li>
                    <ResumeLink href="https://drive.google.com/file/d/1E22wdC27ytFg51Wd4wV6SAl_oP3bby2X/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</ResumeLink>
                </li>
            </NavList>
        </nav>
        </HeaderContainer>
    );
};

export { Header };