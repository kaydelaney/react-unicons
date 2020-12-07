import React from 'react';
import { IconProps } from '../types';

const UilMouse = ({
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
      <path d="M12,2A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2ZM7,9a5,5,0,0,1,4-4.9V10H7Zm10,6A5,5,0,0,1,7,15V12H17Zm0-5H13V4.1A5,5,0,0,1,17,9Z" />
    </svg>
  );
};

export default UilMouse;