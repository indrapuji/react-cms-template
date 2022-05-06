import React from 'react';

import { TextIcon, LoadingIcon } from 'assets/svgIcons';

const Loading = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
            }}
        >
            <TextIcon />
            <div style={{ marginBottom: 40, marginTop: 40 }}>
                <LoadingIcon />
            </div>
            <h2 style={{ color: '#43568E' }}>Loading....</h2>
        </div>
    );
};

export default Loading;
