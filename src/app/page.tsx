'use client';

import FunneStarter from '@/components/common/FunnelStarter';

import mainFunnelData from '@/data/mainFunnelData.json';

const Home = () => (
  <div suppressHydrationWarning>
    <FunneStarter
      title="Welcome to the Nebula"
      description="We want to know more about you"
      funnelData={mainFunnelData}
      buttonTitle="Start Quiz"
    />
  </div>
);

export default Home;
