import { ButtonProps } from '@mui/material';

export type TButtonProps = ButtonProps & {
  fullWidthMob?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  isAlternative?: boolean;
};

export { default } from './Button';
