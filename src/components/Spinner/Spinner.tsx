import React from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';

import { SpinnerProps } from './types';

const Container = styled.div`
  position: relative;
`;

import loadingAnimation from './loading.lottie.json';

const Spinner: React.FC<SpinnerProps> = ({ size = 256 }) => {
  return (
    <Container>
      <Lottie animationData={loadingAnimation} style={{ width: size }} />
    </Container>
  );
};

export default Spinner;
