import React from 'react';
import { CircularProgress } from '@mui/material';
import { StyledButton } from './Button.styles';
import { TButtonProps } from '.';

const Button: React.FC<TButtonProps> = ({
  children,

  fullWidth,
  fullWidthMob,
  loading,
  disabled,
  isAlternative,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      $fullWidthMob={fullWidthMob}
      $fullWidth={fullWidth}
      $isAlternative={isAlternative}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </StyledButton>
  );
};

export default Button;
