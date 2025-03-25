'use client';

import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './LoadingScreen.styles';

const LoadingScreen = () => (
  <LoadingContainer>
    <CircularProgress />
  </LoadingContainer>
);

export default LoadingScreen;
