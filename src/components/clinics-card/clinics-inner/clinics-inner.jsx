import Footer from "../../footer/footer"
import Header from "../../header/header"
import Xizmatlar from './Xizmatlar'
import "./clinics-inner.scss"

function ClinicsInner() {
    return (
        <section>
            <Header />
            <div>
                <Xizmatlar />
            </div>
            <Footer />
        </section>
    )
}

export default ClinicsInner