import type { IconProps } from '../types';

const UilAlignLeftJustify = ({
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
      <path d="M3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM15,19H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Zm6-8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilAlignLeftJustify;