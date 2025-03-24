'use client';

import FunneStarter from '@/components/common/FunnelStarter';
import mainFunnelData from '@/data/mainFunnelData.json';

const Home: React.FC = () => (
  <FunneStarter
    title="Welcome to the Nebula"
    description="We want to know more about you"
    funnelData={mainFunnelData}
    buttonTitle="Start Quiz"
  />
);

export default Home;
