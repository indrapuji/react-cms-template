import React from 'react';
import { SidebarIcon, SidebarProfile, SidebarNav } from 'core';

import { navigate } from './Nav';

const SideBar = () => {
    return (
        <div style={{ height: '100vh', width: '20vw', backgroundColor: '#FFB222' }}>
            <SidebarIcon />
            <SidebarProfile />
            <SidebarNav item={navigate} />
        </div>
    );
};

export default SideBar;
