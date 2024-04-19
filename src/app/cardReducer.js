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
      const { cards, activeCard } = state;
      const deletedCardIndex = action.payload;
    
      // Filter out the card to delete from the cards array based on its index
      const deletedCard = cards.filter((_, index) => index !== deletedCardIndex);
    
      // If the active card is deleted, set activeCard to null
      const newActiveCard = activeCard === deletedCardIndex ? null : activeCard;
    
      localStorage.setItem('cards', JSON.stringify(deletedCard));
    
      return {
        ...state,
        cards: deletedCard,
        activeCard: newActiveCard,
      };
    }
    
  },
});

export const { addNewCard, setActiveCard, removeFromStack, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
