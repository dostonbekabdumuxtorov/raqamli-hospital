import Container from "../../components/container/container"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Search from "../../components/search/search"
import ServicesCard from "../../components/services-card/services-card"

function Services() {
    return (
        <section>
            <Header />
            <Container>
                <h2 className="clinics__title">Klinikalar</h2>
                <Search />
                <br />
                <br />

                <ServicesCard/>
            </Container>
            <Footer />
        </section>
    )
}

export default Services