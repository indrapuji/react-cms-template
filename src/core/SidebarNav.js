import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SidebarNav = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const sidebar = useSelector((state) => state.sidebarReducers.sidebar);

    return (
        <div className="mt-3">
            {item.map((nav, idx) => {
                return (
                    <div
                        key={idx}
                        style={{ display: 'flex', alignItems: 'center', height: 50, justifyContent: 'space-between', cursor: 'pointer' }}
                        onClick={() => navigate(nav.to)}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="mx-3" style={{ width: 30, height: 30 }}>
                                {nav.to === path ? nav.iconActive : nav.icon}
                            </div>
                            {sidebar ? (
                                <div style={{ fontWeight: 700, fontSize: 20, color: nav.to === path ? '#43568E' : 'white' }}>{nav.name}</div>
                            ) : null}
                        </div>
                        {sidebar ? <div style={{ height: 40, width: 6, backgroundColor: nav.to === path ? '#43568E' : null }} /> : null}
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarNav;
