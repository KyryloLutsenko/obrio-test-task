import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { ROUTES } from '@/constants/routes';
import { replaceVariables } from '@/utils/replaceVariables';
import { TFunnelScreenLogicProps, TNextPath } from '@/types/funnelTypes';

export const useInfoScreenLogic = ({ funnelSlug, question, onNext }: TFunnelScreenLogicProps) => {
  const answers = useSelector((state: RootState) => state.mainFunnel[funnelSlug] || {});

  const handleNext = () => {
    const defaultOption = question.options?.[0] || 'Next';

    if (typeof question.next === 'string') {
      onNext(question.next);
      return;
    }

    const nextStep = question.next[defaultOption] as TNextPath;

    if (typeof nextStep === 'string') {
      onNext(nextStep);
      return;
    }

    if ('conditions' in nextStep) {
      for (const [questionId, paths] of Object.entries(nextStep.conditions)) {
        const previousAnswer = answers[questionId];
        if (previousAnswer && paths[previousAnswer]) {
          onNext(paths[previousAnswer]);
          return;
        }
      }
    }

    onNext(ROUTES.RESULTS);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return {
    handleNext,
    questionText: replaceVariables(question.text, answers),
    options: question.options || [],
    handleGoBack,
  };
};
