import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink} from './NavbarComponent';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>DPNG99</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLink to='/Profile'>Profil</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='/Kisah'>Kisah</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='/Contact'>Contact</NavLink>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='/pameran'>Pameran </NavBtnLink>
               </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
