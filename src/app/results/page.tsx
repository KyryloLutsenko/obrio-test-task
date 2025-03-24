'use client';

import dynamic from 'next/dynamic';

const MainFunnelResults = dynamic(() => import('@/components/MainFunnelResults'), {
  ssr: false,
});

export default MainFunnelResults;
