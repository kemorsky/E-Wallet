import React from 'react';
import './Card.scss';
import { useDispatch } from 'react-redux';
import {deleteCard} from '../../app/cardReducer'

function Card({ number, index, name, valid, ccv, vendor, onClick, className }) {

  const cardClass = `${vendor.toLowerCase()} card ${className || ''}`;

  const dispatch = useDispatch()

  const handleCardRemoval = () => {
    dispatch(deleteCard(index))
  }
  
  return (
    <div className={cardClass} onClick={onClick} index= {index}>
      <button className='delete_btn' onClick={handleCardRemoval}>X</button>
      <h2>{number || 'XXXX XXXX XXXX XXXX'}</h2>
      <div className='card-info'>
        <article className='article__1'>
          <p>CARDHOLDER NAME</p>
          <h3 className='name'>{name}</h3>
        </article>
        <article className='article__2'>
          <p>VALID THRU</p>
          <h3 className='valid'>{valid}</h3>
        </article>
      </div>
    </div>
  );
}

export default Card;