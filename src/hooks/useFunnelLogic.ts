import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setAnswer } from '@/store/mainFunnelReducer';
import { ROUTES } from '@/constants/routes';
import { replaceVariables } from '@/utils/replaceVariables';
import { TQuestionProps } from '@/types/questionTypes';

interface UseFunnelLogicProps {
  funnelSlug: string;
  question: TQuestionProps;
  onNext: (nextId: string) => void;
}

export const useFunnelLogic = ({ funnelSlug, question, onNext }: UseFunnelLogicProps) => {
  const dispatch = useDispatch();

  const answers = useSelector((state: RootState) => state.mainFunnel[funnelSlug] || {});

  const [value, setValue] = useState('');

  const handleNext = (selectedValue?: string) => {
    const answerValue = selectedValue || value;
    if (!answerValue) return;

    dispatch(
      setAnswer({
        funnelSlug,
        questionId: question.id,
        answer: answerValue,
      }),
    );

    const nextId =
      typeof question.next === 'string'
        ? question.next
        : (question.next[answerValue] ?? ROUTES.RESULTS);
    onNext(nextId);
  };

  const questionText = replaceVariables(question.text, answers);

  return {
    value,
    setValue,
    handleNext,
    questionText,
    options: question.options || [],
  };
};
