import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { setAnswer } from '@/store/mainFunnelReducer';

import { ROUTES } from '@/constants/routes';
import { replaceVariables } from '@/utils/replaceVariables';

import { TFunnelScreenLogicProps, TNextPath } from '@/types/funnelTypes';

export const useFunnelScreenLogic = ({ funnelSlug, question, onNext }: TFunnelScreenLogicProps) => {
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.mainFunnel[funnelSlug] || {});

  const processNextStep = (nextStep: TNextPath) => {
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

  const handleNext = (selectedValue?: string) => {
    if (selectedValue) {
      dispatch(
        setAnswer({
          funnelSlug,
          questionId: question.id,
          answer: selectedValue,
        }),
      );

      const nextPath = question.next[selectedValue];
      if (nextPath) {
        processNextStep(nextPath);
      } else {
        onNext(ROUTES.RESULTS);
      }
    } else {
      const defaultOption = question.options?.[0] || 'Next';
      const nextStep = question.next[defaultOption] as TNextPath;
      processNextStep(nextStep);
    }
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
