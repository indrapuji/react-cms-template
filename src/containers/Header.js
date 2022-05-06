import React from 'react';

const Header = () => {
    return (
        <div style={{ width: '80vw', height: '10vh' }}>
            <div
                className="border-bottom"
                style={{
                    width: '90%',
                    marginLeft: '3vw',
                    marginRight: '3vw',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <p
                    style={{
                        marginTop: 10,
                        fontWeight: 700,
                        fontSize: 30,
                        color: '#43568E',
                    }}
                >
                    Dashboard
                </p>
            </div>
        </div>
    );
};

export default Header;
