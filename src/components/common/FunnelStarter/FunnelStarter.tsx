'use client';

import { useRouter } from 'next/navigation';
import { Container, Typography } from '@mui/material';

import Button from '@/components/common/Button';

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
    <Container
      maxWidth="sm"
      sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}
    >
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Button variant="contained" color="primary" onClick={handleStart}>
        {buttonTitle}
      </Button>
    </Container>
  );
};

export default FunnelStarter;
