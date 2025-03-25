type TConditions = {
  conditions: {
    [questionId: string]: {
      [answer: string]: string;
    };
  };
};

export type TNextPath = string | TConditions;

export type TNext = {
  [key: string]: TNextPath | undefined;
};

export type TQuestionProps = {
  id: string;
  text: string;
  description?: string;
  screenType: string; // змінили на string замість literal type
  options?: string[];
  next: TNext;
};

export type TMainFunnelData = {
  mainFunnelSlug: string;
  questions: TQuestionProps[];
};

export type TFunnelScreenLogicProps = {
  funnelSlug: string;
  question: TQuestionProps;
  onNext: (nextId: string) => void;
};
