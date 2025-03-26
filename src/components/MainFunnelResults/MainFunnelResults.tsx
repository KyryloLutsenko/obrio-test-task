import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Typography, List } from '@mui/material';

import { RootState } from '@/store/store';
import mainFunnelData from '@/data/mainFunnelData.json';
import { formatResultKey } from '@/utils/formatResultsKey';

import Button from '@/components/common/Button';
import LoadingScreen from '@/components/common/LoadingScreen';
import ResultListItem from '@/components/MainFunnelResults/ResultListItem';

import { StyledContainer } from './MainFunnelResults.styles';

const MainFunnelResults = () => {
  const router = useRouter();
  const answers = useSelector(
    (state: RootState) => state.mainFunnel[mainFunnelData.mainFunnelSlug],
  );
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const isNoAnswers = useMemo(() => !answers && !Object.keys(answers).length, [answers]);

  useEffect(() => {
    if (isNoAnswers) {
      router.replace('/');
    }
  }, [router, isNoAnswers]);

  const handleReset = () => {
    setIsButtonLoading(true);
    router.push('/');
  };

  const isLoading = useMemo(() => isNoAnswers, [isNoAnswers]);

  const formattedAnswers = useMemo(() => {
    if (!answers) return [];

    return Object.entries(answers).map(([key, value]) => ({
      formattedKey: formatResultKey(key),
      value,
    }));
  }, [answers]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <StyledContainer>
      <Typography variant="h4">Results:</Typography>
      <List>
        {formattedAnswers.map(({ formattedKey, value }) => (
          <ResultListItem key={formattedKey} formattedKey={formattedKey} value={value} />
        ))}
      </List>
      <Button fullWidth onClick={handleReset} loading={isButtonLoading}>
        Main page
      </Button>
    </StyledContainer>
  );
};

export default MainFunnelResults;
