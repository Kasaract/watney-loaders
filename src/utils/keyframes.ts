import { keyframes } from '@emotion/react';

export const dash = keyframes`
from, 0%, to {
  stroke-dasharray: 20, 320;
  stroke-dashoffset: 0;
}

50% {
  stroke-dasharray: 160, 320;
  stroke-dashoffset: -160;
}

100% {
  stroke-dasharray: 320, 320;
  stroke-dashoffset: -320;
}
`;

export const rotate = keyframes`
100% {
  transform: rotate(360deg);
}
`;
