import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import SideBar from './SideBar';
import Content from './Content';

const Layout = () => {
    const navigate = useNavigate();

    const sidebar = useSelector((state) => state.sidebarReducers.sidebar);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <div className="d-flex">
            <SideBar />
            <div className={!sidebar ? 'main-content' : 'main-content-close'}>
                <Content />
            </div>
        </div>
    );
};

export default Layout;
