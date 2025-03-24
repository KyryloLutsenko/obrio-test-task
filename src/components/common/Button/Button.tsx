import React from 'react';

import { StyledButton } from './Button.styles';

import { TButtonProps } from '.';

const Button: React.FC<TButtonProps> = ({
  children,
  size,
  centered,
  background,
  fullWidthMob,
  textColor,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      {...props}
      $centered={centered}
      $background={background}
      $fullWidthMob={fullWidthMob}
      $color={textColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
