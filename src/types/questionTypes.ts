export type TQuestionProps = {
  id: string;
  text: string;
  screenType: string;
  options: string[];
  next: string | Record<string, string | undefined>;
};
