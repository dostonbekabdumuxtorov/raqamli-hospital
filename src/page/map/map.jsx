import { NavLink } from "react-router-dom";
import ClinicsCard from "../../components/clinics-card/clinics";
import Header from "../../components/header/header"
import "./map.scss";
import Mapp from "./Map/Map";
import { useState } from "react";
import Star from "../../assets/svg/star4.svg";

function Map() {
    const [Cards, setCards] = useState([])

    document.body.style.overflow = 'hidden'

    return (
        <section className="map">
            <Header />

            <div className="map-wrap">
                <div className="map-wrap__left">
                    <div className="map-wrap__left-top">
                        <input className="map-wrap__left-input" type="text" />
                        <button className="map-wrap__left-btn">Qidiruv</button>
                    </div>

                    {
                        Cards.length === 0 ? <ClinicsCard /> :
                            Cards.map((item) => (
                                <NavLink to={"/clinics-inner"}>
                                    <div className="clinics__card">
                                        <img
                                            src={item.img}
                                            alt="This is a clinic card img"
                                            className="clinics__top-img"
                                        />
                                        <div className="clinics__bottom">
                                            <h2 className="clinics__bottom-title">{item?.name}</h2>
                                            <div className="clinics__bottom-item">
                                                <a href="#" className="clinics__bottom-link">
                                                    Batafsil
                                                </a>
                                            </div>
                                        </div>
                                        <div className="clinics__statistic">
                                            <a href="#" className="clinics__statistic-links">
                                                <img
                                                    src={Star}
                                                    alt="This is a star img"
                                                    className="clinics__statistic-img"
                                                />
                                                <img
                                                    src={Star}
                                                    alt="This is a star img"
                                                    className="clinics__statistic-img"
                                                />
                                                <img
                                                    src={Star}
                                                    alt="This is a star img"
                                                    className="clinics__statistic-img"
                                                />
                                                <img
                                                    src={Star}
                                                    alt="This is a star img"
                                                    className="clinics__statistic-img"
                                                />
                                                <img
                                                    src={Star}
                                                    alt="This is a star img"
                                                    className="clinics__statistic-img"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                    }
                </div>
                <div className="map-wrap__right">
                    {/* <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a href="https://yandex.uz/maps/10329/andijan/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Андижан</a><a href="https://yandex.uz/maps/10329/andijan/?ll=72.350664%2C40.783390&utm_medium=mapframe&utm_source=maps&z=11" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Яндекс&nbsp;Карты — транспорт, навигация, поиск мест</a><iframe
                            className="map-iframe" src="https://yandex.uz/map-widget/v1/?ll=72.350664%2C40.783390&z=11" height={400} frameBorder={1} allowFullScreen="true" style={{ position: 'relative' }} />
                    </div> */}
                    <div style={{ position: 'relative', overflow: 'hidden', width: "100%" }}>
                        <Mapp Cards={Cards} setCards={setCards} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map