import React from 'react';
import { IconProps } from '../types';

const UilMinus = ({
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
      <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilMinus;