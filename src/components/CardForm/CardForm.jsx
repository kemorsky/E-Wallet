import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewCard } from '../../app/cardReducer';
import Card from '../Card/Card';
import './CardForm.scss';

function CardForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    valid: '',
    ccv: '',
    vendor: ''
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
    // Create a new card object with all properties
    const newCard = { ...formData };
    
    // Dispatch the action with the new card object
    dispatch(addNewCard(newCard));
    navigate('/')
    
    // Clear form data after adding card
    setFormData({
      number: '',
      name: '',
      valid: '',
      ccv: '',
      vendor: ''
    });
  };

  return (
    <div className='wrapper'>
        < Card number = {formData.number} name= {formData.name} valid = {formData.valid} ccv = {formData.ccv} vendore = {formData.vendor} />
      <div className='input-big'>
        <h3>CARD NUMBER</h3>
        <input value={formData.number} onChange={handleInputChange} name="number" type="text" placeholder='Card Number' />
      </div>
      <div className='input-big'>
        <h3>CARD HOLDER</h3>
        <input value={formData.name} onChange={handleInputChange} name="name" type="text" />
      </div>
      <div className='input-small'>
        <h3>VALID THRU</h3>
        <input value={formData.valid} onChange={handleInputChange} name="valid" type="text" />
      </div>
      <div className='input-small'>
        <h3>CCV</h3>
        <input value={formData.ccv} onChange={handleInputChange} name="ccv" type="text" />
      </div>
      <div className='input-big'>
        <h3>VENDOR</h3>
        <select value={formData.vendor} onChange={handleInputChange} name="vendor">
            <option value="">Select a Vendor</option>
            <option value="1">BitCoin</option>
            <option value="2">EvilCorp</option>
            <option value="3">MasterCard</option>
            <option value="4">Blockchain Inc</option>
        </select>
      </div>
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
}

export default CardForm;
