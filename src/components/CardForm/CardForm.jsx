import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewCard } from '../../app/cardReducer';
import Card from '../Card/Card';
import './CardForm.scss';

function CardForm() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.card.cards); // Fetch cards from Redux store
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    valid: '',
    ccv: '',
    vendor: '',
    key: 0
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleAddCard = () => {
    const newCard = { ...formData, key: cards.length };
        
    dispatch(addNewCard(newCard));
    navigate('/')
    
    setFormData({
      number: '',
      name: '',
      valid: '',
      ccv: '',
      vendor: '',
      key: formData.key + 1
    });
  };

  return (
    <div className='wrapper'>
        < Card number = {formData.number} name= {formData.name} valid = {formData.valid} ccv = {formData.ccv} vendor = {formData.vendor} index = {formData.key} />
      <div className='input-big'>
        <h3>CARD NUMBER</h3>
        <input className='input-big-box' value={formData.number} onChange={handleInputChange} name="number" type="text" />
      </div>
      <div className='input-big'>
        <h3>CARD HOLDER</h3>
        <input className='input-big-box' value={formData.name} onChange={handleInputChange} name="name" type="text" />
      </div>
      <div className='small-inputs-container'>
        <div className='input-small'>
          <h3>VALID THRU</h3>
          <input className='input-small-box' value={formData.valid} onChange={handleInputChange} name="valid" type="text" />
        </div>
        <div className='input-small'>
          <h3>CCV</h3>
          <input className='input-small-box' value={formData.ccv} onChange={handleInputChange} name="ccv" type="text" />
        </div>
      </div>
      <div className='input-big'>
        <h3>VENDOR</h3>
        <select className='vendor-select' value={formData.vendor} onChange={handleInputChange} name="vendor">
            <option value="default">Select a Vendor</option>
            <option className='bitcoin' value="bitcoin" >Bitcoin Inc</option>
            <option className='evil' value="evil">EvilCorp</option>
            <option className='ninja' value="ninja">Ninja</option>
            <option className='blockchain' value="blockchain">Block Chain Inc</option>
        </select>
      </div>
      <button className='add_card_button' onClick={handleAddCard}>ADD CARD</button>
    </div>
  );
}

export default CardForm;
