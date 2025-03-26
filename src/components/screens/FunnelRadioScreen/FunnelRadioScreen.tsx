import React from 'react';
import { RadioGroup } from '@mui/material';
import Image from 'next/image';

import Button from '@/components/common/Button';

import { useFunnelScreenLogic } from '@/hooks/useFunnelScreenLogic';

import {
  StyledContainer,
  StyledDescription,
  StyledFormControl,
  StyledFormLabel,
  StyledMUIButton,
} from './FunnelRadioScreen.styles';

import { TFunnelScreenProps } from '@/types/screenTypes';

const FunnelRadioScreen = ({ question, onNext, funnelSlug }: TFunnelScreenProps) => {
  const { questionText, options, handleGoBack, handleNext } = useFunnelScreenLogic({
    funnelSlug,
    question,
    onNext,
  });

  return (
    <StyledContainer>
      <StyledMUIButton onClick={handleGoBack} variant="text">
        <Image
          src="/icons/black-back-arrow.svg"
          alt="Back arrow"
          width={8.5}
          height={16}
          style={{ height: 'auto' }}
          priority
        />
      </StyledMUIButton>
      <Image src="/icons/black-logo.svg" alt="Nebula logo" width={16} height={16} priority />
      <StyledFormControl>
        <StyledFormLabel>{questionText}</StyledFormLabel>
        <StyledDescription variant="body1">{question.description}</StyledDescription>
        <RadioGroup sx={{ gap: '1.25rem', marginTop: '1.5rem' }}>
          {options.map((option) => (
            <Button key={option} onClick={() => handleNext(option)} variant="contained" fullWidth>
              {option}
            </Button>
          ))}
        </RadioGroup>
      </StyledFormControl>
    </StyledContainer>
  );
};

export default FunnelRadioScreen;
