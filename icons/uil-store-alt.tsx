import React from 'react';
import { IconProps } from '../types';

const UilStoreAlt = ({
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
      <path d="M22,2H2A1,1,0,0,0,1,3V7A3,3,0,0,0,3,9.82V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.82A3,3,0,0,0,23,7V3A1,1,0,0,0,22,2ZM15,4h2V7a1,1,0,0,1-2,0ZM11,4h2V7a1,1,0,0,1-2,0ZM7,4H9V7A1,1,0,0,1,7,7ZM4,8A1,1,0,0,1,3,7V4H5V7A1,1,0,0,1,4,8ZM14,20H10V16a2,2,0,0,1,4,0Zm5,0H16V16a4,4,0,0,0-8,0v4H5V9.82a3.17,3.17,0,0,0,1-.6,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3.17,3.17,0,0,0,1,.6ZM21,7a1,1,0,0,1-2,0V4h2Z" />
    </svg>
  );
};

export default UilStoreAlt;