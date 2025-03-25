import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setAnswer } from '@/store/mainFunnelReducer';
import { ROUTES } from '@/constants/routes';
import { replaceVariables } from '@/utils/replaceVariables';
import { TFunnelScreenLogicProps } from '@/types/funnelTypes';

export const useRadioScreenLogic = ({ funnelSlug, question, onNext }: TFunnelScreenLogicProps) => {
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.mainFunnel[funnelSlug] || {});

  const handleNext = (selectedValue: string) => {
    dispatch(
      setAnswer({
        funnelSlug,
        questionId: question.id,
        answer: selectedValue,
      }),
    );

    if (typeof question.next === 'string') {
      onNext(question.next);
      return;
    }

    const nextPath = question.next[selectedValue];

    if (typeof nextPath === 'string') {
      onNext(nextPath);
    } else {
      onNext(ROUTES.RESULTS);
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
