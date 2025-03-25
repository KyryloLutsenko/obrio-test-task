import mainFunnelData from '@/data/mainFunnelData.json';
import { TQuestionProps } from '@/types/funnelTypes';
import { TMainFunnelData } from '@/types/funnelTypes';

const typedMainFunnelData = mainFunnelData as TMainFunnelData;

// TODO: better create a hook for it, create a questions map and get by ID instead of using find every time
export const findQuestionById = (questionId: string): TQuestionProps | undefined =>
  typedMainFunnelData.questions.find((q) => q.id === questionId);
