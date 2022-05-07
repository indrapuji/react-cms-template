import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import { TextIconWhite, HomeIcon } from 'assets/svgIcons';

const SidebarIcon = () => {
    const navigate = useNavigate();

    const sidebar = useSelector((state) => state.sidebarReducers.sidebar);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
            {sidebar ? <TextIconWhite /> : <HomeIcon />}
        </div>
    );
};

export default SidebarIcon;
