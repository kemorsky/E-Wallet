import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardStack.scss';
import { useDispatch } from 'react-redux';

function CardStack({onCardClick}) {
  // Use a default empty array if cards state is undefined
  const dispatch = useDispatch()
  const cards = useSelector(state => state.card.cards || []);

  const handleClick = (card) => {
    onCardClick(card); // Dispatch setActiveCard action in Home component
    console.log('Card clicked:', card);
  };

  const cardComponents = cards.map((card, index) => (
    <Card 
        className='stacked-card' 
        key={index}
        {...card}
        onClick={() => handleClick(card)} />
  ));

  console.log(cards)

  return <div className='card-stack'>{cardComponents}</div>;
}

export default CardStack;
