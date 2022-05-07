import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Components
import SideBar from './SideBar';
import Content from './Content';

const Layout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <div className="d-flex">
            <SideBar />
            <div className="main-content">
                <Content />
            </div>
        </div>
    );
};

export default Layout;
