import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  activeCard: null
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addNewCard(state, action) {
      // Instead of modifying the state directly, return a new state object
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    },
    setActiveCard(state, action) {
      return {
        ...state,
        activeCard: action.payload
      };
    },
    // Optionally, you might want to add reducers for removing or updating cards
  },
});

export const { addNewCard, setActiveCard } = cardSlice.actions;

export default cardSlice.reducer;
