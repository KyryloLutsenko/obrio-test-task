import { TQuestionProps, TMainFunnelData } from '@/types/funnelTypes';

export const createQuestionsMap = (data: TMainFunnelData): Record<string, TQuestionProps> => {
  return data.questions.reduce((acc, question) => {
    acc[question.id] = question;
    return acc;
  }, {} as Record<string, TQuestionProps>);
};