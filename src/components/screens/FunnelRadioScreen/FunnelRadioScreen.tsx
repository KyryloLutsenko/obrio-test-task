import React from 'react';
import { RadioGroup } from '@mui/material';

import Button from '@/components/common/Button';

import { useFunnelLogic } from '@/hooks/useFunnelLogic';

import { Container, StyledFormControl, StyledFormLabel } from './FunnelRadioScreen.styles';

import { TFunnelScreenProps } from '@/types/screenTypes';

const FunnelRadioScreen = ({ question, onNext, funnelSlug }: TFunnelScreenProps) => {
  const { handleNext, questionText, options } = useFunnelLogic({
    funnelSlug,
    question,
    onNext,
  });

  const handleChooseOtion = (option: string) => {
    handleNext(option);
  };

  return (
    <Container>
      <StyledFormControl>
        <StyledFormLabel sx={{ textAlign: 'start' }}>{questionText}</StyledFormLabel>
        <RadioGroup sx={{ gap: '1.25rem' }}>
          {options.map((option) => (
            <Button key={option} onClick={() => handleChooseOtion(option)} variant="contained">
              {option}
            </Button>
          ))}
        </RadioGroup>
      </StyledFormControl>
    </Container>
  );
};

export default FunnelRadioScreen;
