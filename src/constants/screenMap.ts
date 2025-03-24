import dynamic from 'next/dynamic';

import { TFunnelScreenProps } from '@/types/screenTypes';

const FunnelRadioScreen = dynamic(() => import('@/components/screens/FunnelRadioScreen'), {
  ssr: false,
});

export const screenMap: Record<string, React.ComponentType<TFunnelScreenProps>> = {
  radio: FunnelRadioScreen,
};
