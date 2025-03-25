import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  height: '100vh',
  maxWidth: '22rem',
  margin: '0 auto',
}));
