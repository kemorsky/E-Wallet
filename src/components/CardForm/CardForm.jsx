import './CardForm.scss'
import Card from '../Card/Card'

function CardForm() {
    return (
        <div className='wrapper'>
            < Card />
            <section className='input-container'>
                <div className='input-big'>
                    <h3>CARD NUMBER</h3>
                    <input type="text" />
                </div>
                <div className='input-big'>
                    <h3>CARD HOLDER</h3>
                    <input type="text" />
                </div>
                <div className='input-small'>
                    <h3>VALID THRU</h3>
                    <input type="text" />
                </div>
                <div className='input-small'>
                    <h3>CCV</h3>
                    <input type="text" />
                </div>
                <div className='input-big'>
                    <h3>VENDOR</h3>
                    <input type="text" />
                </div>
            </section>
        </div>
    )
}

export default CardForm