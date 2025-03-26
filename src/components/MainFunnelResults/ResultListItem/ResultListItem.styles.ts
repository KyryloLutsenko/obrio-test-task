import { Typography, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled(ListItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px !important',
  textAlign: 'center',
}));

export const StyledKey = styled(Typography)(() => ({
  fontSize: '1rem',
  textDecoration: 'underline',
  fontWeight: 'bold',
  '&::first-letter': {
    textTransform: 'uppercase',
  },
}));

export const StyledValue = styled(Typography)(() => ({
  fontSize: '1rem',
  fontStyle: 'italic',
}));
