import './Home.scss'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
import {setActiveCard} from '../../app/cardReducer'
import { useNavigate } from 'react-router-dom';

function Home() {

    const activeCard = useSelector(state => state.card.activeCard)
    const stackCards = useSelector(state => state.card.cards.filter(card => card !== activeCard));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCardClick = (card) => {
        dispatch(setActiveCard(card));
    }

    function handleClick() {
        navigate("/addcard")
    }

    return (
        <div className='home-wrapper'>
            <h1>E-WALLET</h1>
            {activeCard && (
                <>
                    <p>ACTIVE CARD</p>
                    <Card {...activeCard} />
                </>
            )}
            < CardStack cards={stackCards} onCardClick={handleCardClick}/>
            <button className='add__button' onClick={handleClick}>ADD A NEW CARD</button>
        </div>
    )
}

export default Home