'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';

import Button from '@/components/common/Button';

import { resetAnswers } from '@/store/mainFunnelReducer';
import { persistor } from '@/store/store';
import mainFunnelData from '@/data/mainFunnelData.json';

import { StyledContainer } from './FunnelStarter.styles';

import { TFunnelStarterProps } from '.';

const FunnelStarter: React.FC<TFunnelStarterProps> = ({
  title,
  description,
  funnelData,
  buttonTitle,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAnswers({ funnelSlug: mainFunnelData.mainFunnelSlug }));
    persistor.purge();
  }, [dispatch]);

  const handleStart = () => {
    const firstQuestionId = funnelData.questions[0]?.id;
    if (firstQuestionId) {
      setIsLoading(true);
      router.push(`/${funnelData.mainFunnelSlug}/${firstQuestionId}`);
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h4" sx={{ marginBottom: '0.5rem' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleStart}
        loading={isLoading}
        fullWidth
      >
        {buttonTitle}
      </Button>
    </StyledContainer>
  );
};

export default FunnelStarter;
