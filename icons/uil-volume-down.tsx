import React from 'react';
import { IconProps } from '../types';

const UilVolumeDown = ({
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
      <path d="M18.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,18,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,20,12,4.06,4.06,0,0,0,18.83,9.17ZM14.43,4.1a1,1,0,0,0-1,.12L8.65,8H5A1,1,0,0,0,4,9v6a1,1,0,0,0,1,1H8.65l4.73,3.78A1,1,0,0,0,14,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,15,19V5A1,1,0,0,0,14.43,4.1ZM13,16.92l-3.38-2.7A1,1,0,0,0,9,14H6V10H9a1,1,0,0,0,.62-.22L13,7.08Z" />
    </svg>
  );
};

export default UilVolumeDown;