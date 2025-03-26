import { Suspense } from 'react';

import ScreenRenderer from '@/components/common/ScreenRenderer';
import LoadingScreen from '@/components/common/LoadingScreen';

import mainFunnelData from '@/data/mainFunnelData.json';

import { TMainFunnelParamsProps } from '@/types/params';

export const generateStaticParams = () => {
  return mainFunnelData.questions.map((question) => ({
    funnelSlug: mainFunnelData.mainFunnelSlug,
    questionId: question.id,
  }));
};

const QuestionPage = async ({ params }: { params: TMainFunnelParamsProps }) => {
  const { mainFunnelSlug, questionId } = await params;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScreenRenderer funnelSlug={mainFunnelSlug} questionId={questionId} />
    </Suspense>
  );
};

export default QuestionPage;
