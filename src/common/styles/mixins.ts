import { css, keyframes } from "styled-components";

export const glass = css`
background-color: rgba(120, 120, 120, 0.2);
backdrop-filter: blur(6px);
`;

export const smoothlyAnim = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;