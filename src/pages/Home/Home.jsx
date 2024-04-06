import './Home.scss'
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack';

function Home() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/addcard")
    }

    return (
        <div className='home-wrapper'>
            <h1>E-WALLET</h1>
            <p>ACTIVE CARD</p>
            < Card />
            < CardStack />
            <button className='add__button' onClick={handleClick}>ADD A NEW CARD</button>
        </div>
    )
}

export default Home