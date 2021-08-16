import { createSlice } from "@reduxjs/toolkit"

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
            '789': {
                id: '789',
                front: 'front text',
                back: 'back text'
            },
            '101': {
                id: '101',
                front: 'front text',
                back: 'back text'
            },
            '102': {
                id: '102',
                front: 'front text',
                back: 'back text'
            },
        }
    },
    reducers: {
        addCard: (state, action) => {
            const {id, front, back} = action.payload;

            state.cards[id] = {id: id, front: front, back: back};
        }
    }
});

export const selectCards = (state) => state.cards;

export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;