import { createSlice } from "@reduxjs/toolkit"
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            '456': {
              id: '456',
              topicId: '123',
              name: 'quiz for example topic',
              cardIds: ['789', '101', '102']
            }
        }
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const thunkAddQuiz = (quiz) => {
    return (dispatch) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId(quiz));
    };
};

export const selectQuizzes = (state) => state.quizzes;

export const {addQuiz, addQuizIdToTopic} = quizzesSlice.actions;

export default quizzesSlice.reducer;