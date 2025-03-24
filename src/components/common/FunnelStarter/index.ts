export type TFunnelStarterProps = {
  title: string;
  description: string;
  funnelData: {
    mainFunnelSlug: string;
    questions: { id: string }[];
  };
  buttonTitle: string;
};

export { default } from './FunnelStarter';
