import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarNav = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    console.log(location);

    return (
        <div style={{ marginTop: 90, marginLeft: '2.5vw' }}>
            {item.map((nav, idx) => {
                return (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', height: 60, justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => navigate(nav.to)}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {nav.icon}
                            <div style={{ marginLeft: 35, fontWeight: 700, fontSize: 20, color: nav.to === path ? '#43568E' : 'white' }}>{nav.name}</div>
                        </div>
                        <div style={{ height: 40, width: 6, backgroundColor: nav.to === path ? '#43568E' : 'white' }} />
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarNav;
