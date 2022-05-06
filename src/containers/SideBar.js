import React from 'react';
import { SidebarIcon, SidebarProfile } from 'core';

const SideBar = () => {
    return (
        <div style={{ height: '100vh', width: '20vw', backgroundColor: '#FFB222' }}>
            <SidebarIcon />
            <SidebarProfile />
        </div>
    );
};

export default SideBar;
