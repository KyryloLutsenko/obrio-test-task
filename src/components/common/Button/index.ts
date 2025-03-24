import { ButtonProps } from '@mui/material';

export type TButtonProps = ButtonProps & {
  size?: 'small' | 'medium' | 'large';
  fullWidthMob?: boolean;
  background?: string;
  centered?: boolean;
  textColor?: string;
};

export { default } from './Button';
