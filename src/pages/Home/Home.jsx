import './Home.scss'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';
// import {setActiveCard} from '../../app/cardReducer'
// import { useNavigate } from 'react-router-dom';

function Home() {

    const activeCard = useSelector(state => state.card.activeCard)
    const stackCards = useSelector(state => state.card.cards.filter(card => card !== activeCard));

    return (
        <div className='home-wrapper'>
            <h1>E-WALLET</h1>
            <p>ACTIVE CARD</p>
            {activeCard && (
                <>
                    <Card className='active' {...activeCard} />
                </>
            )}
            < CardStack cards={stackCards}/>
        </div>
    )
}

export default Home