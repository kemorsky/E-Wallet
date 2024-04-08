import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardStack.scss';

function CardStack({onCardClick}) {
  
  const cards = useSelector(state => state.card.cards || []);

  const handleCardClick = (card) => {
    onCardClick(card); // Dispatch setActiveCard action in Home component
    console.log('Card clicked:', card);
  };

  const cardComponents = cards.map((card, index) => (
    <Card 
        className='stacked-card' 
        key={index}
        {...card}
        onClick={() => handleCardClick(card)} />
  ));

  console.log(cards)

  return <div className='card-stack'>{cardComponents}</div>;
}

export default CardStack;
