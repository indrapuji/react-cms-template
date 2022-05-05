import React from 'react';

const Dashboard = React.lazy(() => import('pages/Dashboard'));
const Patient = React.lazy(() => import('pages/Patient'));

const routes = [
   { path: '/dashboard', exact: true, component: Dashboard },
   { path: '/patien', exact: true, component: Patient },
];

export default routes;
