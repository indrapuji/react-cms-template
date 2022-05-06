import React from 'react';
import { SidebarIcon, SidebarProfile, SidebarNav } from 'core';

import { navigate } from './Nav';

const SideBar = () => {
    return (
        <div className="main-sidebar">
            <SidebarIcon />
            <SidebarProfile />
            <SidebarNav item={navigate} />
        </div>
    );
};

export default SideBar;
