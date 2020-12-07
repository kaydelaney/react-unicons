import React from 'react';
import { IconProps } from '../types';

const UilEnvelopeSearch = ({
  color = "currentColor",
  size = "24",
  ...otherProps
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M22.21,10.29,20.48,8.57a4.37,4.37,0,0,0,.65-2.26,4.31,4.31,0,1,0-4.32,4.32A4.37,4.37,0,0,0,19.07,10l1.72,1.73a1,1,0,0,0,1.42,0A1,1,0,0,0,22.21,10.29ZM18.45,8a2.37,2.37,0,0,1-3.27,0,2.3,2.3,0,0,1-.68-1.64A2.32,2.32,0,0,1,16.81,4a2.3,2.3,0,0,1,1.64.68,2.28,2.28,0,0,1,.68,1.63A2.3,2.3,0,0,1,18.45,8ZM20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0L15,13.88a1,1,0,0,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Z" />
    </svg>
  );
};

export default UilEnvelopeSearch;