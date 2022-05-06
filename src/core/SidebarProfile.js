import React from 'react';
import { Image } from 'react-bootstrap';

const SidebarProfile = () => {
    return (
        <div style={{ marginTop: 60, marginLeft: '1.5vw', height: 70, display: 'flex', alignItems: 'center' }}>
            <Image
                src="https://media-exp1.licdn.com/dms/image/C5603AQHeExfdKYuu7A/profile-displayphoto-shrink_200_200/0/1589275537199?e=1657152000&v=beta&t=WuH2toBqY2Or-wo-Hwr0YM1TGjU7JDNSPIv3mHuMafE"
                style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 2, borderColor: 'white', borderStyle: 'solid' }}
            />
            <div style={{ marginLeft: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 21, color: 'white' }}>Indra Puji Novirwan</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'white' }}>Frontend Developer</div>
            </div>
        </div>
    );
};

export default SidebarProfile;
