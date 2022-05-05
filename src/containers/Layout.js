import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
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
      <div style={{ display: 'flex' }}>
         <SideBar />
         <div>
            <Header />
            <div style={{ width: '80vw', height: '90vh', overflow: 'scroll' }}>
               <Content />
            </div>
         </div>
      </div>
   );
};

export default Layout;
