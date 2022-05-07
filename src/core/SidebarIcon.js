import React from 'react';
import { useNavigate } from 'react-router-dom';

//Components
import { TextIconWhite } from 'assets/svgIcons';

const SidebarIcon = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
            <TextIconWhite />
        </div>
    );
};

export default SidebarIcon;
