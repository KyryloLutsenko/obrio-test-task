type Answers = Record<string, string>;

const evaluateCondition = (condition: string, answers: Answers): boolean => {
  if (condition.includes('have children')) {
    return answers['parent'] === 'Yes' || answers['single-parent'] === 'Yes';
  }
  return false;
};

const formatGenderText = (gender: string, capitalize: boolean): string => {
  const lowercased = gender.toLowerCase();
  return capitalize ? lowercased.charAt(0).toUpperCase() + lowercased.slice(1) : lowercased;
};

export const replaceVariables = (text: string, answers: Answers): string => {
  let result = text.replace(/{(\w+)}/g, (match, key) => {
    if (key.toLowerCase() === 'gender') {
      const capitalize = key.charAt(0) === key.charAt(0).toUpperCase();
      return formatGenderText(answers['gender'] || '', capitalize);
    }
    return answers[key] || '';
  });

  result = result.replace(/{([^}]+?\(if [^}]+?\))}/g, (match, phrase) => {
    const [textToShow, condition] = phrase.split('(if ').map((string: string) => string.trim());
    const cleanCondition = condition.replace(')', '');

    return evaluateCondition(cleanCondition, answers) ? textToShow : '';
  });

  return result;
};
