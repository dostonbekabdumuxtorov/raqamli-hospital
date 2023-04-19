import ClinicsCard from "../../components/clinics-card/clinics"
import Container from "../../components/container/container"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Search from "../../components/search/search"

import "./clinics.scss"

function Clinics() {
    return (
        <section>
            <Header />
            <Container>
                <h2 className="clinics__title">Klinikalar</h2>
                <Search />

                <ClinicsCard />
            </Container>
            <Footer />
        </section>
    )
}

export default Clinics