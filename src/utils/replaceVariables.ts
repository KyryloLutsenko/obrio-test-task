import { REGEXP_PATTERNS, REPLACE_LOGIC_STRINGS } from '@/constants/replaceVariablesLogic';

import { TAnswersProps } from '@/types/funnelTypes';

export const replaceVariables = (text: string, answers: TAnswersProps): string => {
  // First, handle parent/single-parent replacement
  let result = text.replace(REGEXP_PATTERNS.PARENT, (match, key) => {
    return answers[key] === REPLACE_LOGIC_STRINGS.YES
      ? REPLACE_LOGIC_STRINGS.HAS_CHILDREN
      : REPLACE_LOGIC_STRINGS.EMPTY;
  });

  // Then handle gender and other replacements
  result = result.replace(REGEXP_PATTERNS.VARIABLES, (match, key) => {
    if (key.toLowerCase() === REPLACE_LOGIC_STRINGS.GENDER) {
      return answers[REPLACE_LOGIC_STRINGS.GENDER].toLowerCase() || REPLACE_LOGIC_STRINGS.EMPTY;
    }
    return answers[key] || REPLACE_LOGIC_STRINGS.EMPTY;
  });

  return result;
};
