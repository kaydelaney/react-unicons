import React from 'react';
import { IconProps } from '../types';

const UilMusicTuneSlash = ({
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
      <path d="M12,7.33a1,1,0,0,0,1-1V5.78l6-1.5V7.22L14.7,8.3a1,1,0,0,0,.24,2l.24,0L20.24,9l.07,0,.19-.09.15-.1a.93.93,0,0,0,.13-.15.78.78,0,0,0,.1-.15.55.55,0,0,0,.06-.18.65.65,0,0,0,0-.19A.24.24,0,0,0,21,8V3a1,1,0,0,0-1.24-1l-8,2A1,1,0,0,0,11,5V6.33A1,1,0,0,0,12,7.33Zm9.71,13-9-9h0l-9-9A1,1,0,0,0,2.29,3.71L11,12.41v2.94A3.45,3.45,0,0,0,9.5,15,3.5,3.5,0,1,0,13,18.5V14.41l7.29,7.3a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM9.5,20A1.5,1.5,0,1,1,11,18.5,1.5,1.5,0,0,1,9.5,20Z" />
    </svg>
  );
};

export default UilMusicTuneSlash;