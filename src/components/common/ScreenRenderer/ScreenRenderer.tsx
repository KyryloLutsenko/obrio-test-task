'use client';

import { notFound } from 'next/navigation';

import { useNavigationHandler } from '@/hooks/useNavigationHandler';

import { getQuestionById } from '@/utils/getQuestionById';
import { screenMap } from '@/constants/screenMap';
import { mainFunnelQuestionsMap } from '@/constants/funnelMaps';

import { TScreenRendererProps } from '.';

const ScreenRenderer = ({ funnelSlug, questionId }: TScreenRendererProps) => {
  const { handleNext } = useNavigationHandler(funnelSlug);

  const question = getQuestionById(questionId, mainFunnelQuestionsMap);

  if (!question) {
    console.error(`Question with ID "${questionId}" not found.`);
    notFound();
  }

  const ScreenComponent = screenMap[question.screenType];

  return <ScreenComponent question={question} onNext={handleNext} funnelSlug={funnelSlug} />;
};

export default ScreenRenderer;
