import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  padding: '1rem',
  height: '100vh',
  maxWidth: '22rem',
  margin: '0 auto',
}));
