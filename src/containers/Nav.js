import { DashboardIcon, DashboardIconActive, BellIcon, BellIconActive, SettingIcon, SettingIconActive } from 'assets/svgIcons';

const navigate = [
    {
        name: 'Dashboard',
        to: '/dashboard',
        icon: <DashboardIcon />,
        iconActive: <DashboardIconActive />,
    },
    {
        name: 'Notification',
        to: '/notification',
        icon: <BellIcon />,
        iconActive: <BellIconActive />,
    },
    {
        name: 'Admin Management',
        to: '/admin',
        icon: <SettingIcon />,
        iconActive: <SettingIconActive />,
    },
];

export { navigate };
