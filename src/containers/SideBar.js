import React from 'react';
import { SidebarIcon, SidebarProfile, SidebarNav, SidebarBottom } from 'core';

import { navigate } from './Nav';

const SideBar = () => {
    return (
        <div className="main-sidebar">
            <SidebarIcon />
            <SidebarProfile />
            <SidebarNav item={navigate} />
            <SidebarBottom />
        </div>
    );
};

export default SideBar;
