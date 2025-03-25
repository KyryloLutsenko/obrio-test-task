import React, { useCallback, useEffect, useMemo } from 'react';
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
  const router = useRouter();
  const dispatch = useDispatch();
  const answers = useSelector(
    (state: RootState) => state.mainFunnel[mainFunnelData.mainFunnelSlug],
  );

  const isNoAnswers = useMemo(() => !answers && !Object.keys(answers).length, [answers]);

  useEffect(() => {
    if (isNoAnswers) {
      router.replace('/');
    }
  }, [router, isNoAnswers]);

  const handleReset = useCallback(() => {
    dispatch(resetAnswers({ funnelSlug: mainFunnelData.mainFunnelSlug }));
    persistor.purge();
    router.push('/');
  }, [dispatch, router]);

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
          // TODO: Create a separate component for list item
          // TODO: Create styled component for Typography
          <StyledListItem key={formattedKey}>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: '1rem',
                textDecoration: 'underline',
                '&::first-letter': {
                  textTransform: 'uppercase',
                },
              }}
            >
              {formattedKey}:
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
