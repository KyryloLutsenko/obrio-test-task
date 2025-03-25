import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import ScreenRenderer from '@/components/common/ScreenRenderer';
import LoadingScreen from '@/components/common/LoadingScreen';

import mainFunnelData from '@/data/mainFunnelData.json';
import { findQuestionById } from '@/utils/findQuestionById';

import { TMainFunnelParamsProps } from '@/types/params';

export const generateStaticParams = () => {
  return mainFunnelData.questions.map((question) => ({
    funnelSlug: mainFunnelData.mainFunnelSlug,
    questionId: question.id,
  }));
};

const QuestionPage = async ({ params }: { params: TMainFunnelParamsProps }) => {
  const { mainFunnelSlug, questionId } = await params;
  const question = findQuestionById(questionId);

  if (!question) {
    console.error(`Question with ID "${questionId}" not found.`);
    notFound();
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScreenRenderer funnelSlug={mainFunnelSlug} question={question} />
    </Suspense>
  );
};

export default QuestionPage;
