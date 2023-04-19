import './card.scss'
import cardImg from "../../assets/images/napr1.png"
import cardIcon from "../../assets/images/urologiya-icon.png"
import cardDecor from "../../assets/images/decor.png"

function Card() {
    return (
        <div>
                <div className='card'>
                    <div className="card__img">
                        <img src={cardImg} alt="Picture" />
                    </div>
                    <div className="card__title">
                        <h2>Urologiya</h2>
                        <div className="card__text">
                        <p>Read more</p>
                        <img className='decor' src={cardDecor} alt="decor" />
                        <img className='icon' src={cardIcon} alt="Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;