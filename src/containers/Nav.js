import { DashboardIcon, BellIcon, SettingIcon } from 'assets/svgIcons';

const navigate = [
    {
        name: 'Dashboard',
        to: '/dashboard',
        icon: <DashboardIcon />,
    },
    {
        name: 'Notification',
        to: '/notification',
        icon: <BellIcon />,
    },
    {
        name: 'Admin Management',
        to: '/admin',
        icon: <SettingIcon />,
    },
];

export { navigate };
