import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWraper, SideBtnWrap, SidebarRoute, SidebarMenu, SidebarLink } from './SidebarComponent'
const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink>
                        about
                    </SidebarLink>
                </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute>Masuk
                        </SidebarRoute>
                    </SideBtnWrap>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default Sidebar
