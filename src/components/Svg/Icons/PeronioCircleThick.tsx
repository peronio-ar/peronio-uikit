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
        d='M71.92,56.27c-2.64.77-5.49,1.36-8.16,2.16a22.19,22.19,0,0,0-6.14,2.7,1.38,1.38,0,0,0-.26.22v0c.53-2.77-2.08-12.54-2.69-15.22L54.42,45,36.62,75.17a1,1,0,0,0-.12.7,14,14,0,0,0,3.34,6.75l0,0a4.94,4.94,0,0,0-1.73,1.73,4.86,4.86,0,1,0,8.38,4.94,4.81,4.81,0,0,0,.67-2.35h0a13.75,13.75,0,0,0,7.52-.34,1,1,0,0,0,.56-.45l17.8-30.2ZM45.14,88.48A3.31,3.31,0,1,1,44,83.94,3.31,3.31,0,0,1,45.14,88.48Z'
      />
      <path
        fill={fill}
        d='M51.12,92.54c-2.27,1.55-4.78,3-7.07,4.6a22.59,22.59,0,0,0-5,4.48,1.69,1.69,0,0,0-.17.29v0c-.36-2.8-5.89-11.26-7.3-13.62l-.61-1-7.48,34.25a1,1,0,0,0,.1.71,13.83,13.83,0,0,0,5.28,5.36h0a5,5,0,0,0-1.11,2.19,4.87,4.87,0,1,0,9.41-.37h0a14,14,0,0,0,7-2.67,1,1,0,0,0,.39-.61L52.1,91.88Zm-15.39,39a3.31,3.31,0,1,1-2.53-3.94A3.31,3.31,0,0,1,35.73,131.5Z'
      />
      <path
        fill={fill}
        d='M58.32,163.48a1,1,0,0,0,0-.72L44.61,130.49l-.42,1.11c-.95,2.57-2.16,5.21-3.11,7.83A22.59,22.59,0,0,0,39.59,146a2,2,0,0,0,0,.34v0c-1.92-2.08-11.32-5.79-13.83-6.89l-1.08-.48,13.69,32.28a1,1,0,0,0,.49.51,13.86,13.86,0,0,0,7.41,1.33h0a4.78,4.78,0,0,0,.36,2.42,4.86,4.86,0,1,0,7.46-5.74h0A14,14,0,0,0,58.32,163.48Zm-4.17,8.8a3.31,3.31,0,1,1-4.34-1.75A3.32,3.32,0,0,1,54.15,172.28Z'
      />
      <path
        fill={fill}
        d='M85.37,203.75a4.88,4.88,0,0,0-2-1.38l0,0a13.8,13.8,0,0,0,2-7.24,1,1,0,0,0-.25-.68L62.09,168,62,169.22c-.1,2.75-.43,5.63-.51,8.42a22.76,22.76,0,0,0,.63,6.68,2.15,2.15,0,0,0,.13.32v0c-2.47-1.38-12.56-2-15.3-2.23l-1.17-.11,23.08,26.39a1,1,0,0,0,.63.33A13.81,13.81,0,0,0,77,208h0a4.86,4.86,0,1,0,8.42-4.21Zm-1.48,5.69a3.31,3.31,0,1,1,.31-4.67A3.31,3.31,0,0,1,83.89,209.44Z'
      />
      <path
        fill={fill}
        d='M175.08,56.27c2.64.77,5.49,1.36,8.16,2.16a22.19,22.19,0,0,1,6.14,2.7,1.38,1.38,0,0,1,.26.22v0c-.53-2.77,2.08-12.54,2.69-15.22l.26-1.15,17.8,30.21a1,1,0,0,1,.12.7,14,14,0,0,1-3.34,6.75l0,0a4.94,4.94,0,0,1,1.73,1.73,4.86,4.86,0,0,1-8.38,4.94,4.81,4.81,0,0,1-.67-2.35h0a13.75,13.75,0,0,1-7.52-.34,1,1,0,0,1-.56-.45L174,55.94Zm26.78,32.21A3.31,3.31,0,1,0,203,83.94,3.31,3.31,0,0,0,201.86,88.48Z'
      />
      <path
        fill={fill}
        d='M195.88,92.54c2.27,1.55,4.78,3,7.07,4.6a22.59,22.59,0,0,1,5,4.48,1.69,1.69,0,0,1,.17.29v0c.36-2.8,5.89-11.26,7.3-13.62l.61-1,7.48,34.25a1,1,0,0,1-.1.71,13.83,13.83,0,0,1-5.28,5.36h0a5,5,0,0,1,1.11,2.19,4.87,4.87,0,1,1-9.41-.37h0a14,14,0,0,1-7-2.67,1,1,0,0,1-.39-.61L194.9,91.88Zm15.39,39a3.31,3.31,0,1,0,2.53-3.94A3.31,3.31,0,0,0,211.27,131.5Z'
      />
      <path
        fill={fill}
        d='M188.68,163.48a1,1,0,0,1,0-.72l13.68-32.27.42,1.11c.95,2.57,2.16,5.21,3.11,7.83a22.59,22.59,0,0,1,1.49,6.55,2,2,0,0,1,0,.34v0c1.92-2.08,11.32-5.79,13.83-6.89l1.08-.48-13.69,32.28a1,1,0,0,1-.49.51,13.86,13.86,0,0,1-7.41,1.33h0a4.78,4.78,0,0,1-.36,2.42,4.86,4.86,0,1,1-7.46-5.74h0A14,14,0,0,1,188.68,163.48Zm4.17,8.8a3.31,3.31,0,1,0,4.34-1.75A3.32,3.32,0,0,0,192.85,172.28Z'
      />
      <path
        fill={fill}
        d='M161.63,203.75a4.88,4.88,0,0,1,2-1.38l0,0a13.8,13.8,0,0,1-2-7.24,1,1,0,0,1,.25-.68L184.91,168l.05,1.18c.1,2.75.43,5.63.51,8.42a22.76,22.76,0,0,1-.63,6.68,2.15,2.15,0,0,1-.13.32v0c2.47-1.38,12.56-2,15.3-2.23l1.17-.11-23.08,26.39a1,1,0,0,1-.63.33A13.81,13.81,0,0,1,170,208h0a4.86,4.86,0,1,1-8.42-4.21Zm1.48,5.69a3.31,3.31,0,1,0-.31-4.67A3.31,3.31,0,0,0,163.11,209.44Z'
      />
      <path
        fill={fill}
        d='M183.54,78.62H168.43c-1.78-17.27-9.7-39-41.86-39-6.75,0-13.68.19-20.24.19-1.5,0-3.37-.19-4.68.75-1.5,1.12-.94,17.8-.75,23.61,0,1.47,0,6.81.07,14.42H79.68v6.74H101c0,2.9,0,6,0,9.27H79.68v6.74H101c0,18.36,0,39.77.06,55.29h0v33.08a5.13,5.13,0,1,0,3.73,0v-21a.37.37,0,0,1,.37-.36h4.89a.38.38,0,0,1,.39.38v41.46a5.13,5.13,0,1,0,3.73,0v-30l2.84-.06c.46,0,1,0,1.63,0v10.29a.36.36,0,0,0,.35.36h6.75a4.09,4.09,0,1,0-.35-3.73h-2.67a.36.36,0,0,1-.35-.36V171.07c.28-13.12-.11-36.9-.11-38.67,0-2.62,5.24-2.06,6.74-2.06,24.52,0,35.12-13.8,38.56-29h16V94.63H168.63c.19-2,.28-3.95.28-5.89,0-1.07,0-2.2,0-3.38h14.67ZM106,194.5a3.08,3.08,0,1,1-3.08-3.08A3.08,3.08,0,0,1,106,194.5ZM115.39,215a3.08,3.08,0,1,1-3.08-3.08A3.08,3.08,0,0,1,115.39,215Zm13.79-28.9a2.46,2.46,0,1,1-2.46,2.46A2.47,2.47,0,0,1,129.18,186.13ZM122.45,62.89c.56-2.07,3-2.07,4.87-1.88,9.85.68,15.85,8.6,17.58,17.61H122.36c0-5,0-9.46.09-12A24.54,24.54,0,0,1,122.45,62.89Zm17.42,42.53a19.89,19.89,0,0,1-15,6.37,3,3,0,0,1-2.62-2.81c0-2.06,0-4.12.19-6.18,0-.34,0-.84,0-1.43h20.09A17.52,17.52,0,0,1,139.87,105.42Zm4.83-10.79H122.41c0-2.79,0-6,0-9.27h23.15A44.24,44.24,0,0,1,144.7,94.63Z'
      />
    </Svg>
  );
};

export default Icon;