import React from 'react';
import './Card.scss';

function Card({ number, index, name, valid, ccv, vendor, onClick }) {

  const cardClass = `${vendor.toLowerCase()} card stacked-card`;
  
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
      </div>
    </div>
  );
}

export default Card;
