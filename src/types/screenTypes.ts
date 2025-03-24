import { TQuestionProps } from '@/types/questionTypes';

export type TFunnelScreenProps = {
  question: TQuestionProps;
  onNext: (nextId: string) => void;
  funnelSlug: string;
};
