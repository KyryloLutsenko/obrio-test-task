'use client';

import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';

import Button from '@/components/common/Button';

import { StyledContainer } from './FunnelStarter.styles';

import { TFunnelStarterProps } from '.';

const FunnelStarter: React.FC<TFunnelStarterProps> = ({
  title,
  description,
  funnelData,
  buttonTitle,
}) => {
  const router = useRouter();

  const handleStart = () => {
    const firstQuestionId = funnelData.questions[0]?.id;
    if (firstQuestionId) {
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
      <Button variant="contained" color="primary" onClick={handleStart} fullWidth>
        {buttonTitle}
      </Button>
    </StyledContainer>
  );
};

export default FunnelStarter;
