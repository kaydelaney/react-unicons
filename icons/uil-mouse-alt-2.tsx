import React from 'react';
import { IconProps } from '../types';

const UilMouseAlt2 = ({
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
      <path d="M12,2A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9a5,5,0,0,1,4-4.9V12a1,1,0,0,0,2,0V4.1A5,5,0,0,1,17,9Z" />
    </svg>
  );
};

export default UilMouseAlt2;