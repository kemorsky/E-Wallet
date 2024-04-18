import { createSlice } from '@reduxjs/toolkit';

const items = JSON.parse(localStorage.getItem('cards')) || [];

const initialState = {
  cards: items,
  activeCard: null
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addNewCard(state, action) {
      const newCards = [...state.cards, action.payload];
      localStorage.setItem('cards', JSON.stringify(newCards));
      return {
        ...state,
        cards: newCards,
      };
    },
    setActiveCard(state, action) {
      const activeCards = [...state.cards, action.payload];
      localStorage.setItem('cards', JSON.stringify(activeCards));
      return {
        ...state,
        activeCard: action.payload
      };
    },
    removeFromStack(state, action) {
      const updatedCards = state.cards.filter(card => card !== action.payload);
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      return {
        ...state,
        cards: updatedCards
      };
    },
    deleteCard(state, action) {
      // Filter out the card to delete from the cards array
      const deletedCards = state.cards.filter(card => card.index !== action.payload);

      // Update the local storage with the updated cards array
      localStorage.setItem('cards', JSON.stringify(deletedCards));

      // Return the updated state with the filtered cards array
      return {
        ...state,
        cards: deletedCards,
      };
    }
    // Optionally, you might want to add reducers for removing or updating cards
  },
});

export const { addNewCard, setActiveCard, removeFromStack, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
