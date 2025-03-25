import Image from 'next/image';

import Button from '@/components/common/Button';

import { useInfoScreenLogic } from '@/hooks/useInfoScreenLogic';

import {
  StyledContainer,
  StyledDescription,
  StyledMUIButton,
  StyledScreenBlock,
  StyledTitle,
} from './FunnelInfoScreen.styles';

import { TFunnelScreenProps } from '@/types/screenTypes';

const FunnelInfoScreen = ({ question, onNext, funnelSlug }: TFunnelScreenProps) => {
  const { questionText, options, handleNext, handleGoBack } = useInfoScreenLogic({
    funnelSlug,
    question,
    onNext,
  });

  return (
    <StyledContainer>
      <StyledMUIButton onClick={handleGoBack} variant="text">
        <Image
          src="/icons/white-back-arrow.svg"
          alt="Back arrow"
          width={8.5}
          height={16}
          style={{ height: 'auto' }}
          priority
        />
      </StyledMUIButton>
      <Image src="/icons/white-logo.svg" alt="Nebula logo" width={16} height={16} priority />
      <StyledScreenBlock>
        <StyledTitle>{questionText}</StyledTitle>
        <StyledDescription variant="body1" sx={{ marginBottom: '1.5rem' }}>
          {question.description}
        </StyledDescription>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => handleNext()}
            variant="contained"
            fullWidth
            isAlternative
          >
            {option}
          </Button>
        ))}
      </StyledScreenBlock>
    </StyledContainer>
  );
};

export default FunnelInfoScreen;
