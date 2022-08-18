import React, { FC } from "react";
import { IconProps } from "../../types/types";

const SignUp: FC<IconProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        className="header-icon"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 172 172"
      >
        <path d="M64.5,10.75c-20.72315,0 -37.625,16.90185 -37.625,37.625c0,12.95459 6.61377,24.46045 16.62891,31.24219c-19.16943,8.23047 -32.75391,27.25293 -32.75391,49.38281h10.75c0,-23.80957 19.19043,-43 43,-43c7.39063,0 14.27734,1.93164 20.32422,5.20703c-5.96289,7.39063 -9.57422,16.83887 -9.57422,27.04297c0,23.68359 19.31641,43 43,43c23.68359,0 43,-19.31641 43,-43c0,-23.68359 -19.31641,-43 -43,-43c-9.38526,0 -18.11963,3.08643 -25.19531,8.23047c-2.37256,-1.49072 -4.95508,-2.75049 -7.55859,-3.86328c10.01514,-6.78174 16.62891,-18.2876 16.62891,-31.24219c0,-20.72315 -16.90185,-37.625 -37.625,-37.625zM64.5,21.5c14.90723,0 26.875,11.96778 26.875,26.875c0,14.90723 -11.96777,26.875 -26.875,26.875c-14.90722,0 -26.875,-11.96777 -26.875,-26.875c0,-14.90722 11.96778,-26.875 26.875,-26.875zM118.25,86c17.86768,0 32.25,14.38232 32.25,32.25c0,17.86768 -14.38232,32.25 -32.25,32.25c-17.86768,0 -32.25,-14.38232 -32.25,-32.25c0,-17.86768 14.38232,-32.25 32.25,-32.25zM112.875,96.75v16.125h-16.125v10.75h16.125v16.125h10.75v-16.125h16.125v-10.75h-16.125v-16.125z"></path>
      </svg>
    </div>
  );
};

export default SignUp;
