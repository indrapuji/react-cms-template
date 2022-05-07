import * as React from 'react';

const HomeIcon = (props) => (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#a)">
            <path
                d="m19.144 8.558-.001-.002L11.117.531A1.799 1.799 0 0 0 9.837 0a1.8 1.8 0 0 0-1.282.53L.534 8.553l-.009.009a1.813 1.813 0 0 0 .004 2.557 1.8 1.8 0 0 0 1.258.531h.32v5.907c0 1.168.95 2.12 2.12 2.12h3.14a.577.577 0 0 0 .576-.577v-4.63c0-.534.434-.968.967-.968h1.852c.534 0 .967.434.967.967v4.63c0 .32.259.577.577.577h3.14c1.169 0 2.12-.95 2.12-2.12V11.65h.297a1.8 1.8 0 0 0 1.28-.53 1.814 1.814 0 0 0 .001-2.561Z"
                fill="#FFF"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h19.675v19.675H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default HomeIcon;
