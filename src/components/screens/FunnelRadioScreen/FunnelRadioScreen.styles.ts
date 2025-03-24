import { styled } from '@mui/material/styles';
import { FormControl, FormLabel } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));

export const StyledFormControl = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '20.5rem',
}));

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));
