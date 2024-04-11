import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { setActiveCard, removeFromStack } from '../../app/cardReducer'; // Import the new action
import './CardStack.scss';

function CardStack() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.card.cards || []);
  const activeCard = useSelector(state => state.card.activeCard);

  const handleCardClick = (card) => {
    dispatch(setActiveCard(card)); // Dispatch setActiveCard action in Home component
    dispatch(removeFromStack(card)); // Dispatch removeCardFromStack action to remove card from stack
    console.log('Card clicked:', card);
  };

  // Filter out the active card
  const stackCards = cards.filter(card => card !== activeCard);

  // Map stackCards to Card components with stacked-card class
  const cardComponents = stackCards.map((card, index) => (
    <Card 
      className='stacked-card'
      key={index}
      {...card}
      onClick={() => handleCardClick(card)} 
    />
  ));

  // Render default card
  const defaultCardComponent = stackCards.length === 0 ? (
    <Card number="XXXX XXXX XXXX XXXX" name="" valid="" vendor="" onClick={() => handleCardClick(activeCard)} />
  ) : null;

  return <div className='card-stack'>{defaultCardComponent}{cardComponents}</div>;
}

export default CardStack;
