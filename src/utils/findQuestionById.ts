import mainFunnelData from '@/data/mainFunnelData.json';
import { TQuestionProps } from '@/types/questionTypes';

export function findQuestionById(questionId: string): TQuestionProps | undefined {
  return mainFunnelData.questions.find((q) => q.id === questionId);
}
