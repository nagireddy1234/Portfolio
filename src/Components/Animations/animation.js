import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const bounceAnimation = keyframes`${zoomIn}`;
const BouncyDiv = styled.div`
animation: 1s ${bounceAnimation};
`;
const bounceAnimationRight = keyframes`${zoomIn}`;
const BouncyDivRight = styled.div`
animation: 1s ${bounceAnimationRight};
`;

export {BouncyDiv, BouncyDivRight};