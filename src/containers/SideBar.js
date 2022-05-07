import React from 'react';
import { SidebarIcon, SidebarProfile, SidebarNav, SidebarBottom, SidebarOut } from 'core';

import { navigate } from './Nav';

const SideBar = () => {
    return (
        <div className="main-sidebar">
            <SidebarIcon />
            <SidebarProfile />
            <SidebarNav item={navigate} />
            <SidebarOut />
            <SidebarBottom />
        </div>
    );
};

export default SideBar;
