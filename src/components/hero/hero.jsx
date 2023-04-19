import Container from "../container/container"
import "./hero.scss"

import Img from "../../assets/img/alimova.png.svg"
import { Button } from "@mui/material"

function Hero() {
    return (
        <Container>
            <section className="hero">
                <div className="hero__left">
                    <h1 className="hero__left-title">Raqamli shifoxona</h1>
                    <p className="hero__left-desc">Bizning raqamli shifoxonamizga xush kelibsiz. Shaxsiylashtirilgan davolash rejalari va real vaqtda yangilanishlar bilan sog'liqni saqlash bo'yicha sayohatni biz bilan boshdan kechiring.</p>
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