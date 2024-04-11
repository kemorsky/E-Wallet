import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { setActiveCard, removeFromStack } from '../../app/cardReducer'; // Import the new action
import './CardStack.scss';

function CardStack({onCardClick}) {
  
  const dispatch = useDispatch()
  const cards = useSelector(state => state.card.cards || []);

  const handleCardClick = (card) => {
    dispatch(setActiveCard(card))
    dispatch(removeFromStack(card))
    // onCardClick(card); // Dispatch setActiveCard action in Home component
    console.log('Card clicked:', card);
  };

  const cardComponents = cards.map((card, index, cardClass) => (
    <Card 
        className='stacked-card' 
        key={index}
        {...card}
        onClick={() => handleCardClick(card)} />
  ));

  const defaultCardComponent = !cards.length ? (
    <Card className='stacked-card' number="XXXX XXXX XXXX XXXX" name="" valid="" vendor="" />
  ) : null;

  console.log(cards)

  return <div className='card-stack'>{defaultCardComponent}{cardComponents}</div>;
}

export default CardStack;
