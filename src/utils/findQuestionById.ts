import mainFunnelData from '@/data/mainFunnelData.json';
import { TQuestionProps } from '@/types/funnelTypes';
import { TMainFunnelData } from '@/types/funnelTypes';

const typedMainFunnelData = mainFunnelData as TMainFunnelData;

export const findQuestionById = (questionId: string): TQuestionProps | undefined =>
  typedMainFunnelData.questions.find((q) => q.id === questionId);
