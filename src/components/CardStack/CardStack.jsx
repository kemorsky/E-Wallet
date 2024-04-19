import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import { setActiveCard, removeFromStack } from '../../app/cardReducer'; // Import the new action
import './CardStack.scss';

function CardStack() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.card.cards || []);
  const activeCard = useSelector(state => state.card.activeCard);

  const stackCards = cards.filter(card => card !== activeCard);

  const cardComponents = stackCards.map((card, index) => (
    <Card 
      className='stacked-card'
      key={index}
      index={index}
      {...card}
      onClick={() => handleCardClick(card, index)} 
    />
  ));

  const navigate = useNavigate();

  const handleCardClick = (card) => {
    const isCardActive = activeCard === card;
  
    if (isCardActive) {
      dispatch(setActiveCard(null)); 
    } else {
      dispatch(setActiveCard(card));
    }
    dispatch(removeFromStack(card));
  };

  function handleClick() {
    navigate("/addcard")
}

  // Render default card
  const defaultCardComponent = stackCards.length === 0 ? (
    <Card number="XXXX XXXX XXXX XXXX" name="" valid="" vendor="" onClick={() => handleCardClick(activeCard)} />
  ) : null;

  return <div className='card-stack'>{defaultCardComponent}{cardComponents}
          <button className='add__button' onClick={handleClick}>ADD A NEW CARD</button>
  </div>;
}

export default CardStack;
