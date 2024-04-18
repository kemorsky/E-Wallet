import React from 'react';
import './Card.scss';
import { useSelector, useDispatch } from 'react-redux';
import {deleteCard} from '../../app/cardReducer'

function Card({ number, index, name, valid, ccv, vendor, onClick, className }) {

  const cardClass = `${vendor.toLowerCase()} card ${className || ''}`;

  const dispatch = useDispatch()

  const handleCardRemoval = () => {
    dispatch(deleteCard(index))
  }
  
  return (
    <div className={cardClass} onClick={onClick} index= {index}>
      <h2>{number || 'XXXX XXXX XXXX XXXX'}</h2>
      <div className='card-info'>
        <article className='article__2'>
          <p>CARDHOLDER NAME</p>
          <h3>{name}</h3>
        </article>
        <article className='article__2'>
          <p>VALID THRU</p>
          <h3>{valid}</h3>
        </article>
        <button className='delete_btn' onClick={handleCardRemoval}>X</button>
      </div>
    </div>
  );
}

export default Card;