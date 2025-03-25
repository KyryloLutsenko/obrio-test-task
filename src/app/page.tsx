'use client';

import { Box } from '@mui/material';

import FunneStarter from '@/components/common/FunnelStarter';

import mainFunnelData from '@/data/mainFunnelData.json';

const Home = () => (
  <Box>
    <FunneStarter
      title="Welcome to the Nebula"
      description="We want to know more about you"
      funnelData={mainFunnelData}
      buttonTitle="Start Quiz"
    />
  </Box>
);

export default Home;
