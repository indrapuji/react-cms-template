import React from 'react';
import { Image } from 'react-bootstrap';

const SidebarProfile = () => {
    return (
        <div style={{ marginTop: 60, marginLeft: '1.5vw', height: 70, display: 'flex', alignItems: 'center' }}>
            <Image src="https://avatars.githubusercontent.com/u/47031836?v=4" style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 2, borderColor: 'white', borderStyle: 'solid' }} />
            <div style={{ marginLeft: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 21, color: 'white' }}>Indra Puji Novirwan</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'white' }}>Frontend Developer</div>
            </div>
        </div>
    );
};

export default SidebarProfile;
