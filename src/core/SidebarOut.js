import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OutIcon } from 'assets/svgIcons';

const SidebarOut = () => {
    const navigate = useNavigate();

    const handleSignout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="sidebar-signout">
            <div
                style={{ display: 'flex', alignItems: 'center', height: 50, justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={handleSignout}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="mx-3 nav-icon" style={{ width: 30, height: 30 }}>
                        <OutIcon />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 20, color: 'white' }}>Sign Out</div>
                </div>
            </div>
        </div>
    );
};

export default SidebarOut;
