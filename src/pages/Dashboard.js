import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
   const location = useLocation();
   console.log(location);
   return <div>Dashboard</div>;
};

export default Dashboard;
