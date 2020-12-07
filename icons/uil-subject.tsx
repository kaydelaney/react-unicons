import type { IconProps } from '../types';

const UilSubject = ({
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
      <path d="M13,16H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2ZM3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,3H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilSubject;