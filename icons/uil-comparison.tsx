import type { IconProps } from '../types';

const UilComparison = ({
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
      <path d="M21,20H4v-.54l5-5,3.8,3.8a1,1,0,0,0,1.41,0l7.5-7.5a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-6.8,6.8-3.79-3.8a1,1,0,0,0-1.41,0L4,16.63V11.46l5-5,2.8,2.8a1,1,0,0,0,1.41,0L18,4.47l2.19,2.19a1,1,0,0,0,1.41-1.42L18.69,2.35a1,1,0,0,0-1.41,0l-4.8,4.8L9.69,4.35a1,1,0,0,0-1.41,0L4,8.63V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilComparison;