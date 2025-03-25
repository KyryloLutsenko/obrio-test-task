import { styled } from '@mui/material/styles';
import { Box, Button as MUIButton, Typography } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  height: '100vh',
  width: '100%',
  background: theme.palette.background.default,
}));

export const StyledScreenBlock = styled(Box)(() => ({
  width: '20.5rem',
  marginTop: '2.5rem',
  textAlign: 'center',
}));

export const StyledMUIButton = styled(MUIButton)(({ theme }) => ({
  position: 'absolute',
  top: '0.375rem',
  left: '1rem',
  padding: '0.75rem 1rem',
  borderRadius: '50%',
  minWidth: 'fit-content',

  [theme.breakpoints.up('sm')]: {
    left: '10.75rem',
    top: '1.25rem',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.text.secondary,
  marginBottom: '1.25rem',
  textAlign: 'center',
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  marginBottom: '1.25rem',
  textAlign: 'center',
}));
