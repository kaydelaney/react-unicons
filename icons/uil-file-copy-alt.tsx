import React from 'react';
import { IconProps } from '../types';

const UilFileCopyAlt = ({
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
      <path d="M16,20H8a3,3,0,0,1-3-3V7A1,1,0,0,0,3,7V17a5,5,0,0,0,5,5h8a1,1,0,0,0,0-2Zm-6-7a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H11A1,1,0,0,0,10,13ZM21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V15a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM19,15a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,.18,1H11a1,1,0,0,0,0,2h8Z" />
    </svg>
  );
};

export default UilFileCopyAlt;