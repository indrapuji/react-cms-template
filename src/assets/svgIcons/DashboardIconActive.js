import * as React from 'react';

const DashboardIconActive = ({ color }, props) => (
    <svg width={21} height={21} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x={13.759} y={9.414} width={7.241} height={7.241} rx={1} fill={color ? color : '#43568E'} />
        <rect width={11.586} height={11.586} rx={1} fill={color ? color : '#43568E'} />
        <rect y={13.758} width={11.586} height={7.241} rx={1} fill={color ? color : '#43568E'} />
        <rect x={13.759} width={7.241} height={7.241} rx={1} fill={color ? color : '#43568E'} />
    </svg>
);

export default DashboardIconActive;
