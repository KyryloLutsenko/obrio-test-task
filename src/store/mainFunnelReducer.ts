import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FunnelAnswersState {
  [funnelSlug: string]: {
    [questionId: string]: string;
  };
}

const initialState: FunnelAnswersState = {};

const mainFunnelSlice = createSlice({
  name: 'funnelAnswers',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{
        funnelSlug: string;
        questionId: string;
        answer: string;
      }>,
    ) => {
      const { funnelSlug, questionId, answer } = action.payload;

      if (!state[funnelSlug]) {
        state[funnelSlug] = {};
      }

      state[funnelSlug][questionId] = answer;
    },
    resetAnswers: (state, action: PayloadAction<{ funnelSlug: string }>) => {
      const { funnelSlug } = action.payload;

      state[funnelSlug] = {};
    },
  },
});

export const { setAnswer, resetAnswers } = mainFunnelSlice.actions;
export default mainFunnelSlice.reducer;
