import Header from "../../components/header/header"
import DDoctors from "../../components/doctors-card/doctors"
import { doctorsData } from "../../data/data"
import './doctor.scss'
import Footer from "../../components/footer/footer"
import Search from "../../components/search/search"
import Container from "../../components/container/container"

function Doctors() {
    return (
        <section>
            <Header />
            <Container>
                <h2 className="doctors__title1">Doktorlar</h2>
                <Search />
                <div className="doctors_page" style={{marginTop: '50px'}}>
                    {
                        doctorsData.map((item, i) => (
                            <DDoctors key={i} item={item} />
                        ))
                    }
                </div>
            </Container>
            <Footer />
        </section>
    )
}

export default Doctors