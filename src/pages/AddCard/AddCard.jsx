import CardForm from "../../components/CardForm/CardForm"
import './AddCard.scss'
    
function AddCard() {
    return (
        <div className="new-card-wrapper">
            <h1>ADD A NEW BANK CARD</h1>
            <p>NEW CARD</p>
            <CardForm />
        </div>
    )
}

export default AddCard