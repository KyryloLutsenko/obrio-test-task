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
  screenType: string;
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

export type TAnswersProps = Record<string, string>;

type TQuestionsMap = Map<string, TQuestionProps>;

export type TGetQuestionById = (
  questionId: string,
  questionsMap: TQuestionsMap,
) => TQuestionProps | undefined;
