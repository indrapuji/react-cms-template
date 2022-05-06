import React from 'react';
import { Image } from 'react-bootstrap';

const SidebarProfile = () => {
    return (
        <div className="profile-container">
            <Image src="https://avatars.githubusercontent.com/u/47031836?v=4" className="profile-avatar" />
            <div className="mx-4">
                <div className="profile-name">Indra Puji Novirwan</div>
                <div className="profile-role">Frontend Developer</div>
            </div>
        </div>
    );
};

export default SidebarProfile;
