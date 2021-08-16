import { createSlice } from "@reduxjs/toolkit"

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            '123': {
                id: '123',
                name: 'example topic',
                icon: 'icon url',
                quizIds: ['456']
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
        },
        addQuizId: (state, action) => {
            const {quizId, topicId} = action.payload;

            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics;

export const {addTopic, addQuizId} = topicsSlice.actions;

export default topicsSlice.reducer;