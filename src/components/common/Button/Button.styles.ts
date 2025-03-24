import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) => !prop.startsWith('$'),
})<{ $fullWidthMob?: boolean; $background?: string; $centered?: boolean; $color?: string }>(
  ({ theme, $centered, $color }) => ({
    ...theme.typography.button,
    textTransform: 'none',
    padding: '0.5rem 3rem',
    transition: 'all 0.3s ease',
    display: $centered ? 'block' : 'inline-flex',
    margin: $centered ? '0 auto' : undefined,
    color: $color || theme.typography.button.color,
    height: '4rem',
    background: '#EAEEF7',

    '&:hover': {
      background: theme.palette.background.default,
      color: theme.palette.text.secondary,
    },
  }),
);
