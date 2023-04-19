import ClinicsCard from "../../components/clinics-card/clinics";
import Header from "../../components/header/header"
import "./map.scss";

function Map() {

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

                    <ClinicsCard />
                </div>
                <div className="map-wrap__right">
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a href="https://yandex.uz/maps/10329/andijan/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Андижан</a><a href="https://yandex.uz/maps/10329/andijan/?ll=72.350664%2C40.783390&utm_medium=mapframe&utm_source=maps&z=11" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Яндекс&nbsp;Карты — транспорт, навигация, поиск мест</a><iframe
                            className="map-iframe" src="https://yandex.uz/map-widget/v1/?ll=72.350664%2C40.783390&z=11" height={400} frameBorder={1} allowFullScreen="true" style={{ position: 'relative' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map