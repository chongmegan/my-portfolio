import React, {useState} from 'react';
import '../../App.css';
import { 
    HeaderContainer,
    NavList,
    NavigationLink,
    DropdownLink
} from '../Header/Header.styles';

const Header = (props) => {

    const { height } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <HeaderContainer height={height}>
        <div className={`menu-toggler ${isOpen ? "open" : ""}`} onClick={toggle}>
            <div className="bar half start"></div>
            <div className="bar"></div>
            <div className="bar half end"></div>
        </div>
        <nav className={`top-nav ${isOpen ? "nav-bar" && "open" : ""}`} onClick={toggle}>
            <NavList>
                <li> 
                    <NavigationLink to="/">Home</NavigationLink>
                </li>
                <li> 
                    <NavigationLink href="#about">About</NavigationLink>
                </li>
                <li>
                    <div className="dropdown"> 
                    <NavigationLink href="#portfolio">Portfolio</NavigationLink>
                    <div className="dropdown-content">
                        <DropdownLink to="/in-progress" target="_blank">In Progress</DropdownLink>
                        <DropdownLink to="/worksense" target="_blank">Worksense</DropdownLink>
                        <DropdownLink to="/weschedule" target="_blank">WeSchedule</DropdownLink>
                        <DropdownLink to="/cornerhealth" target="_blank">Cornerhealth</DropdownLink>
                      </div>
                      </div>
                </li>
                <li>
                    <NavigationLink href="https://drive.google.com/file/d/12CZBeA_jqIP1vcYQH4LRF2gJxYPtrL4R/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</NavigationLink>
                </li>
            </NavList>
        </nav>
        </HeaderContainer>
    );
};

export { Header };