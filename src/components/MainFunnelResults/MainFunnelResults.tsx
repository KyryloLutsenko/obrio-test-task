import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Typography, List } from '@mui/material';

import { persistor, RootState } from '@/store/store';
import { resetAnswers } from '@/store/mainFunnelReducer';
import mainFunnelData from '@/data/mainFunnelData.json';
import { formatResultKey } from '@/utils/formatResultsKey';

import Button from '@/components/common/Button';
import LoadingScreen from '@/components/common/LoadingScreen';

import { StyledContainer, StyledListItem } from './MainFunnelResults.styles';

const MainFunnelResults = () => {
  const mainFunnelAnswersObject = useSelector((state: RootState) => state.mainFunnel);
  const router = useRouter();
  const dispatch = useDispatch();

  const answers = mainFunnelAnswersObject[mainFunnelData.mainFunnelSlug];

  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      router.replace('/');
    }
  }, [answers, router]);

  const handleReset = useCallback(() => {
    dispatch(resetAnswers({ funnelSlug: mainFunnelData.mainFunnelSlug }));
    persistor.purge();
    router.push('/');
  }, [dispatch, router]);

  if (!answers || Object.keys(answers).length === 0) {
    return <LoadingScreen />;
  }

  const mainFunnelAnswersArray = Object.entries(answers);

  return (
    <StyledContainer>
      <Typography variant="h4">Results:</Typography>
      <List>
        {mainFunnelAnswersArray.map(([key, value]) => (
          <StyledListItem key={key}>
            <Typography fontWeight="bold" sx={{ fontSize: '1rem', textDecoration: 'underline' }}>
              {formatResultKey(key)}:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
              {value}
            </Typography>
          </StyledListItem>
        ))}
      </List>

      <Button fullWidth onClick={handleReset}>
        Main page
      </Button>
    </StyledContainer>
  );
};

export default MainFunnelResults;
