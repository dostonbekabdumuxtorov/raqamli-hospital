import Container from "../container/container"
import "./hero.scss"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Img from "../../assets/img/alimova.png.svg"
import { Button } from "@mui/material"
import Img1 from '../../assets/svg/svg.png'
import Img2 from '../../assets/svg/svg1.png'
import Img3 from '../../assets/svg/svg2.png'
function Hero() {
    return (
        <Container>
            <section className="hero">
                <div className="hero__left">
                    <h1 className="hero__left-title">Raqamli shifoxona</h1>
                    <div className="mainbox">
                        <img src={Img1} alt="" />
                        <div>
                            <h2>15ta Klinika</h2>
                            <p>Bizda Andijon viloyati bo'yicha 15ta klinika mavjud</p>
                        </div>
                    </div>
                    <div className="mainbox">
                        <img src={Img2} alt="" />
                        <div>
                            <h2>Tezkor Aloqa</h2>
                            <p>telefon yoki ilova orqali</p>
                        </div>
                    </div>
                    <div className="mainbox">
                        <img src={Img3} alt="" />
                        <div>
                            <h2>25% chegirma</h2>
                            <p>biz sodiqlik dasturiga muvofiq bonuslar bilan qaytamiz</p>
                        </div>
                    </div>
                    {/* <p className="hero__left-desc">Bizning raqamli shifoxonamizga xush kelibsiz. Shaxsiylashtirilgan davolash rejalari va real vaqtda yangilanishlar bilan sog'liqni saqlash bo'yicha sayohatni biz bilan boshdan kechiring.</p> */}
                    <Button className="hero__left-btn">Batafsil</Button>
                </div>
                <div className="hero__right">
                    <img src={Img} alt="host" width={680} height={480} />
                </div>
            </section>
        </Container>
    )
}

export default Hero