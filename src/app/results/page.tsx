'use client';

import dynamic from 'next/dynamic';

import LoadingScreen from '@/components/common/LoadingScreen';

const MainFunnelResults = dynamic(() => import('@/components/MainFunnelResults'), {
  loading: () => <LoadingScreen />,
  ssr: false,
});

export default function MainFunnelResultsWrapper() {
  return <MainFunnelResults />;
}
