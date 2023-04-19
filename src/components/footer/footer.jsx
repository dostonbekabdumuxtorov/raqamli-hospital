import Container from "../container/container";
import icon1 from "../../assets/svg/logo3.svg";
import icon2 from "../../assets/svg/logo2.svg";
{
  /*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */
}
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* < Footer Container > */}
        <div className="footer__container">
          {/* < Footer Top > */}
          <div className="footer__top">
            <div className="footer__top-content">
              <div className="footer__top-contact">
                <h2 className="footer__top-title active">Aloqa markazi</h2>
                <a href="tel:106" className="footer__top-description main">
                  +998 90 030 30 30
                </a>
              </div>
              <div className="footer__top-contact">
                <h2 className="footer__top-title">Shoshilinch kasalxonaga yotqizish</h2>
                {/*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */}
                <a href="tel:106" className="footer__top-description">
                  +998 90 040 40 40
                </a>
              </div>
              <div className="footer__top-contact">
                <h2 className="footer__top-title">Raqamli shifoxona Mobil App</h2>
                <div className="footer__top-app">
                  <a href="#" target="_blank">
                    <img src={icon1} alt="This is a google-play icon" />
                  </a>
                  <a href="#" target="_blank">
                    <img src={icon2} alt="This is a apple-store icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </ Footer Top > */}

          {/* < Footer Navbar > */}
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Xizmatlar
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Klinikalar
                </a>
                {/*Kontentlarni notog'ri tuzgan va strukturasini notog'ri yozgan bo'lsam ming bor uzur */}
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Shifokorlar
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__item-link">
                  Suniy Intelekt
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* < /Footer Navbar > */}
        <hr className="footer__hr" />
        <div className="footer__bottom">
          <div className="footer__bottom-item">
            <p className="footer__bottom-text">
              Digital Hospital © 2023 BARCHA HUQUQLAR QONUN BILAN HIMOYALANGAN.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
