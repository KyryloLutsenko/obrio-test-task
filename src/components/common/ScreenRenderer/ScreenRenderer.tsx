'use client';

import { screenMap } from '@/constants/screenMap';
import { useNavigationHandler } from '@/hooks/helpers';

import { TScreenRendererProps } from '.';

const ScreenRenderer = ({ funnelSlug, question }: TScreenRendererProps) => {
  const { handleNext } = useNavigationHandler(funnelSlug);

  const ScreenComponent = screenMap[question.screenType];

  return <ScreenComponent question={question} onNext={handleNext} funnelSlug={funnelSlug} />;
};

export default ScreenRenderer;
