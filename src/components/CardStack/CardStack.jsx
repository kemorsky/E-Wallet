import './CardStack.scss'
import { useState } from 'react'
import Card from '../Card/Card'

function CardStack() {

const [cards, setCards] = useState([
    {id: 1, number: '', name: '', valid: ''},
    {id: 2, number: '', name: '', valid: ''},
    {id: 3, number: '', name: '', valid: ''},
    {id: 4, number: '', name: '', valid: ''}
]);

const cardComponents = cards.map((card) => {
    return <Card className="stacked-card" key= {card.id} number= {card.number} name= {card.name} date={card.valid} />
})

console.log(setCards)

    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default CardStack