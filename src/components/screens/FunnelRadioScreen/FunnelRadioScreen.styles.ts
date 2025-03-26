import { styled } from '@mui/material/styles';
import { FormControl, FormLabel, Box, Button as MUIButton, Typography } from '@mui/material';

export const StyledContainer = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  height: '100vh',
  width: '100%',
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

export const StyledFormControl = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '20.5rem',
  marginTop: '2.5rem',
}));

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.text.primary,
  '&::first-letter': {
    textTransform: 'uppercase',
  },
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  marginTop: '1rem',
  textAlign: 'center',
}));
