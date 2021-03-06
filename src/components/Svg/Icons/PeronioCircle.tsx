import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  const fill = props.fill ?? '#fcf7f2';
  const bg = props.color ?? '#0CB4C0';

  return (
    <Svg viewBox='0 0 247 247' {...props}>
      <circle fill={bg} cx='123.5' cy='123.5' r='123.5' />
      <path
        fill={fill}
        d='M183,77.59H168.48c-1.72-16.6-9.33-37.46-40.26-37.46-6.48,0-13.15.18-19.45.18-1.44,0-3.24-.18-4.51.72-1.44,1.08-.9,17.11-.72,22.7,0,1.41,0,6.55.07,13.86H83.14v6.48h20.48c0,2.8,0,5.79,0,8.92H83.14v6.48h20.51c0,17.65,0,38.24.06,53.16h0v31.8a4.93,4.93,0,1,0,3.59,0V164.3a.35.35,0,0,1,.35-.35h4.71a.37.37,0,0,1,.37.36v39.86a4.93,4.93,0,1,0,3.59,0V175.3l2.73-.06c.44,0,1,0,1.56,0v9.89a.34.34,0,0,0,.34.34h6.49a3.93,3.93,0,1,0-.34-3.58h-2.56a.35.35,0,0,1-.34-.35v-15c.27-12.61-.11-35.48-.11-37.18,0-2.52,5-2,6.49-2,23.57,0,33.76-13.27,37.06-27.85H183V93H168.67c.18-1.91.27-3.8.27-5.66,0-1,0-2.12-.05-3.26H183ZM108.46,189a3,3,0,1,1-3-3A3,3,0,0,1,108.46,189Zm9,19.74a3,3,0,1,1-3-3A3,3,0,0,1,117.48,208.75ZM130.73,181a2.37,2.37,0,1,1-2.36,2.36A2.37,2.37,0,0,1,130.73,181Zm-6.47-118.5c.54-2,2.88-2,4.69-1.8,9.47.65,15.24,8.26,16.91,16.92H124.18c0-4.78,0-9.09.08-11.52A24,24,0,0,1,124.26,62.47ZM141,103.36a19.14,19.14,0,0,1-14.42,6.13,2.89,2.89,0,0,1-2.52-2.71c0-2,0-4,.18-5.94V99.47h19.31A16.67,16.67,0,0,1,141,103.36ZM145.66,93H124.23c0-2.69,0-5.77,0-8.92h22.26A42.92,42.92,0,0,1,145.66,93Z'
      />
    </Svg>
  );
};

export default Icon;
