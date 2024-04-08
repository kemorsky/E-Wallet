import './Home.scss'
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
import {setActiveCard} from '../../app/cardReducer'
import { useNavigate } from 'react-router-dom';

function Home() {

    const activeCard = useSelector(state => state.card.activeCard)

    const handleCardClick = (card) => {
        dispatch(setActiveCard(card));
    }

    const navigate = useNavigate();

    function handleClick() {
        navigate("/addcard")
    }

    return (
        <div className='home-wrapper'>
            <h1>E-WALLET</h1>
            <p>ACTIVE CARD</p>
            {activeCard && <Card {...activeCard} />}
            < CardStack onCardClick={handleCardClick}/>
            <button className='add__button' onClick={handleClick}>ADD A NEW CARD</button>
        </div>
    )
}

export default Home