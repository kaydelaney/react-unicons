import React from 'react';
import { IconProps } from '../types';

const UilFileSlash = ({
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
      <path d="M21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L4,5.41V19a3,3,0,0,0,3,3H17a3,3,0,0,0,2.39-1.2l.9.91a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM17,20H7a1,1,0,0,1-1-1V7.41L17.93,19.34A1,1,0,0,1,17,20ZM8.66,4H12V7a3,3,0,0,0,3,3h3v3.34a1,1,0,1,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L13.06,2H8.66a1,1,0,0,0,0,2ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1Z" />
    </svg>
  );
};

export default UilFileSlash;