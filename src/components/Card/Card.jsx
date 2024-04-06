import './Card.scss'

function Card(props) {
    
    return (
        <div className="card">
            <h2>{props.number}</h2>
            <div className='card-info'>
                <article className='article__1'>
                    <p>CARDHOLDER NAME</p>
                    <h3>{props.name}</h3>
                </article>
                <article className='article__2'>
                    <p>VALID THRU</p>
                    <h3>{props.valid}</h3>
                </article>
            </div>
            
        </div>
    )
}

export default Card