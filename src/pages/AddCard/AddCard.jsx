import CardForm from "../../components/CardForm/CardForm"
import './AddCard.scss'
    
function AddCard() {
    return (
        <div className="new-card-wrapper">
            <h1>ADD A NEW BANK CARD</h1>
            <p>NEW CARD</p>
            <CardForm />
            <button className="add__new__button">ADD NEW CARD</button>
        </div>
    )
}

export default AddCard