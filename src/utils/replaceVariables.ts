export const replaceVariables = (text: string, answers: Record<string, string>): string => {
  return text.replace(/{(.*?)}/g, (_, key) => answers[key] || '');
};
