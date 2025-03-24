'use client';

import { notFound } from 'next/navigation';

import { screenMap } from '@/constants/screenMap';
import { useNavigationHandler } from '@/hooks/helpers';
import { findQuestionById } from '@/utils/findQuestionById';

import { TScreenRendererProps } from '.';

const ScreenRenderer = ({ funnelSlug, questionId }: TScreenRendererProps) => {
  const { handleNext } = useNavigationHandler(funnelSlug);

  if (!funnelSlug || !questionId) {
    console.error('Missing required parameters: mainFunnelSlug or questionId');
    notFound();
  }

  const question = findQuestionById(questionId);

  if (!question) {
    console.error(`Question with ID "${questionId}" not found.`);
    return null;
  }

  const ScreenComponent = screenMap[question.screenType];

  return <ScreenComponent question={question} onNext={handleNext} funnelSlug={funnelSlug} />;
};

export default ScreenRenderer;
