import React from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/common/LoadingScreen';
import { TFunnelScreenProps } from '@/types/screenTypes';

const FunnelRadioScreen = dynamic(() => import('@/components/screens/FunnelRadioScreen'), {
  ssr: false,
  loading: () => React.createElement(LoadingScreen),
});

const FunnelInfoScreen = dynamic(() => import('@/components/screens/FunnelInfoScreen'), {
  ssr: false,
  loading: () => React.createElement(LoadingScreen),
});

export const screenMap: Record<string, React.ComponentType<TFunnelScreenProps>> = {
  radio: FunnelRadioScreen,
  info: FunnelInfoScreen,
};
