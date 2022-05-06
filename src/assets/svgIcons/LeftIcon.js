import * as React from 'react';

const LeftIcon = ({ fill }, props) => (
    <svg width={8} height={11} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="m7.121 1.514-3.89 3.898 3.89 3.898-1.197 1.198L.828 5.412 5.924.316 7.12 1.514Z" fill={fill ? fill : '#C4CDD5'} />
    </svg>
);

export default LeftIcon;
