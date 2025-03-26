import mainFunnelData from '@/data/mainFunnelData.json';

export const mainFunnelQuestionsMap = new Map(
  mainFunnelData.questions.map((question) => [question.id, question]),
);
