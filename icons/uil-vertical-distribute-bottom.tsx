import React from 'react';
import { IconProps } from '../types';

const UilVerticalDistributeBottom = ({
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
      <path d="M21,18H20V13a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-3,0H6V14H18ZM3,10H21a1,1,0,0,0,0-2H19V5a1,1,0,0,0-1-1H6A1,1,0,0,0,5,5V8H3a1,1,0,0,0,0,2ZM7,6H17V8H7Z" />
    </svg>
  );
};

export default UilVerticalDistributeBottom;