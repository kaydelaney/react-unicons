import React from 'react';
import { IconProps } from '../types';

const UilGolfBall = ({
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
      <path d="M14,9a1,1,0,1,0,1,1A1,1,0,0,0,14,9Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,14,6ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17,8a1,1,0,1,0,1,1A1,1,0,0,0,17,8Z" />
    </svg>
  );
};

export default UilGolfBall;