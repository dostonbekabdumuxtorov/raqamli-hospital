import './services-card.scss'
import cardImg from "../../assets/img/napr1.png"
import cardIcon from "../../assets/img/urologiya-icon.png"
import cardDecor from "../../assets/img/decor.png"
import { NavLink } from 'react-router-dom';
import { ServiceData } from '../../data/service';

function ServicesCard() {
    return (
        <div className='services-card'>
            {
                ServiceData.slice(0, 6).map((item) => {
                    return (
                        <NavLink to={'/services'}>
                            <div className='card'>
                                <div className="card__img">
                                    <img style={{ borderRadius: '10px 10px 0px 0px' }} src={item.img} alt="Picture" />
                                </div>
                                <div className="card__title">
                                    <h2>{item.title}</h2>
                                    <div className="card__text">
                                        <p>Batafsil</p>
                                        <img className='decor' src={cardDecor} alt="decor" />
                                        <img className='icon' src={cardIcon} alt="Icon" />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    );
}

export default ServicesCard;