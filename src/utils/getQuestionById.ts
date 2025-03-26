import { TGetQuestionById } from '@/types/funnelTypes';

export const getQuestionById: TGetQuestionById = (questionId, questionsMap) => {
  return questionsMap.get(questionId);
};
