import type { IconProps } from '../types';

const UilAlignRightJustify = ({
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
      <path d="M3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM21,19H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilAlignRightJustify;