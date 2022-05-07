import React from 'react';
import { SidebarIcon, SidebarProfile, SidebarNav, SidebarBottom, SidebarOut } from 'core';
import { useSelector } from 'react-redux';

import { navigate } from './Nav';

const SideBar = () => {
    const sidebar = useSelector((state) => state.sidebarReducers.sidebar);
    return (
        <div className={!sidebar ? 'main-sidebar' : 'main-sidebar-close'}>
            <SidebarIcon />
            {!sidebar ? <SidebarProfile /> : null}
            <SidebarNav item={navigate} />
            <SidebarOut />
            <SidebarBottom />
        </div>
    );
};

export default SideBar;
