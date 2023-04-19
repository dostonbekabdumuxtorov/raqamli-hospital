import { NavLink, useLocation } from "react-router-dom"

import "./header.scss"
import Logo from "../../assets/svg/logojon.svg"
import Container from "../container/container"
import Form from "../form/form"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"

function Header() {


    const location = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, [location.pathname])

    const [isShown, setisShown] = useState(false);


    function handle_open() {
        setisShown(true)
    }

    function handle_close(params) {
        setisShown(false)
    }


    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <div className="header__nav-wrap">
                        <NavLink to={'/'} className="header__logo-link">
                            <img className="header__logo" src={Logo} alt="logo" width={120} height={60} />
                        </NavLink>

                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <NavLink to={'/services'} className="header__item-link">Xizmatlar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/clinics'} className="header__item-link">Klinikalar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/doctors'} className="header__item-link">Shifokorlar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/map'} className="header__item-link">Joylashuv</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/blog'} className="header__item-link">Yangiliklar</NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink to={'/intelligence'} className="header__item-link">Sun'iy Intellekt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Button onClick={handle_open} href="#" className="header__user-cob">
                        <ion-icon name="person"></ion-icon>
                        Shaxsiy kabinet
                    </Button>
                </div>
            </Container>
            {isShown ? <Form handle_close={handle_close} /> : null}
        </header>
    )
}

export default Header