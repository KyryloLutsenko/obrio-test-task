import { TQuestionProps } from '@/types/funnelTypes';

export type TFunnelScreenProps = {
  question: TQuestionProps;
  onNext: (nextId: string) => void;
  funnelSlug: string;
};
