import React from 'react';
import { IconProps } from '../types';

const UilAndroidAlt = ({
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
      <path d="M2.9917,9.00044a.99973.99973,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A.99973.99973,0,0,0,2.9917,9.00044Zm18,0a.99973.99973,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A.99973.99973,0,0,0,20.9917,9.00044Zm-4.13428-5.5a.99974.99974,0,1,0-1.73144-1l-.61414,1.06238a5.92782,5.92782,0,0,0-5.04028,0L8.85742,2.50044a.99974.99974,0,1,0-1.73144,1l.6925,1.19794A5.97889,5.97889,0,0,0,5.9917,9.00044v8a.99974.99974,0,0,0,1,1h2v3a1,1,0,0,0,2,0v-3h2v3a1,1,0,0,0,2,0v-3h2a.99974.99974,0,0,0,1-1v-8a5.97889,5.97889,0,0,0-1.82678-4.30206Zm-.86572,12.5h-8v-5h8Zm-8-7a4,4,0,0,1,8,0Z" />
    </svg>
  );
};

export default UilAndroidAlt;