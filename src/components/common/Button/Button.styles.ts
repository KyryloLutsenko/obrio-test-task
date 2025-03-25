import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) => !prop.startsWith('$'),
})<{
  $fullWidthMob?: boolean;
  $fullWidth?: boolean;
  $isAlternative?: boolean;
}>(({ theme, $fullWidth, $isAlternative }) => ({
  ...theme.typography.button,
  textTransform: 'none',
  padding: '0.75rem 1rem',
  transition: 'all 0.3s ease',
  color: $isAlternative ? theme.palette.text.buttonAlternative : theme.typography.button.color,
  minHeight: '4rem',
  background: theme.palette.background.button,
  width: $fullWidth ? '100%' : 'fit-content',
  boxShadow: '2px 2px 6px 0 #543C9740',
  border: '1px solid #E0E0E0',
  borderRadius: theme.shape.borderRadius,

  '&:hover': {
    background: theme.palette.background.buttonHover,
    boxShadow: '2px 2px 6px 0 #543C9740',
  },

  '&:active': {
    background: $isAlternative
      ? theme.palette.background.buttonActiveAlternative
      : theme.palette.background.buttonActiveGradient,
    color: $isAlternative ? theme.palette.text.buttonAlternative : theme.palette.text.secondary,
  },

  '&.Mui-disabled': {
    opacity: 0.7,
    color: theme.palette.text.primary,
  },

  '.MuiCircularProgress-root': {
    color: 'inherit',
  },
}));
