import type { IconProps } from '../types';

const UilRocket = ({
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
      <path d="M22.60107,2.062a1.00088,1.00088,0,0,0-.71289-.71289A11.25224,11.25224,0,0,0,10.46924,4.97217L9.35431,6.296l-2.6048-.62848A2.77733,2.77733,0,0,0,3.36279,7.0249L1.1626,10.9248A.99989.99989,0,0,0,1.82422,12.394l3.07275.65869a13.41952,13.41952,0,0,0-.55517,2.43409,1.00031,1.00031,0,0,0,.28466.83642l3.1001,3.1001a.99941.99941,0,0,0,.707.293c.02881,0,.05762-.00147.08692-.00391a12.16892,12.16892,0,0,0,2.49157-.49l.64368,3.00318a1.0003,1.0003,0,0,0,1.46924.66162l3.90527-2.20264a3.03526,3.03526,0,0,0,1.375-3.30371l-.6687-2.759,1.23706-1.13751A11.20387,11.20387,0,0,0,22.60107,2.062ZM3.57227,10.72314,5.12842,7.96338a.82552.82552,0,0,1,1.06982-.37549l1.71741.4162-.65.77179A13.09523,13.09523,0,0,0,5.67633,11.174Zm12.47021,8.22217L13.32666,20.477l-.4295-2.00464a11.33992,11.33992,0,0,0,2.41339-1.61987l.74353-.68366.40344,1.66462A1.041,1.041,0,0,1,16.04248,18.94531ZM17.65674,11.98l-3.68457,3.38623a9.77348,9.77348,0,0,1-5.17041,2.3042l-2.4043-2.4043a10.932,10.932,0,0,1,2.40088-5.206l1.67834-1.99268a.9635.9635,0,0,0,.07813-.09277L11.98975,6.271a9.27757,9.27757,0,0,1,8.80957-3.12012A9.21808,9.21808,0,0,1,17.65674,11.98Zm-.923-6.16376a1.5,1.5,0,1,0,1.5,1.5A1.49992,1.49992,0,0,0,16.7337,5.81622Z" />
    </svg>
  );
};

export default UilRocket;