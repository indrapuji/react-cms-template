import React from 'react';
import { LeftIcon, RightIcon } from 'assets/svgIcons';
import { useDispatch, useSelector } from 'react-redux';
import { changeSidebar } from 'store/actions/sidebarActions';

const SidebarBottom = () => {
    const dispatch = useDispatch();

    const sidebar = useSelector((state) => state.sidebarReducers.sidebar);

    const handleSidebar = () => {
        dispatch(changeSidebar(!sidebar));
    };
    return (
        <div className={!sidebar ? 'sidebar-bottom-container' : 'sidebar-bottom-container-close'}>
            <div className="sidebar-bottom-button" onClick={() => handleSidebar()}>
                {!sidebar ? <LeftIcon /> : <RightIcon />}
            </div>
        </div>
    );
};

export default SidebarBottom;
