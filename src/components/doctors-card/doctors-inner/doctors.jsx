import Header from "../../../components/header/header";

import Footer from "../../../components/footer/footer";
import adult from "../../../assets/svg/adult.png";
import Container from "../../../components/container/container";
import "./doctors.scss";
import { useLocation } from "react-router-dom";

function Doctors() {

  const location = useLocation();


  console.log(location.state);

  return (
    <>
      <Header />
      <Container>
        <div className="doctor">
          <div className="doctor__top">
            <h2 className="doctor__top-title">
             {location.state?.name}
            </h2>
          </div>
          <div className="doctor__bottom">
            <div className="doctor__left">
              <div className="doctor__left-img">
                <img src={location.state?.img} alt="This is a doctor img" />
              </div>
              <div className="doctor__left-title">
                <h1 className="doctor__left-description">
                 Bosh shifokor
                </h1>
                <div className="doctor__left-item">
                  <img
                    src={adult}
                    alt="This is a logo img"
                    className="doctor__left-logo"
                  />
                  <h2 className="doctor__left-description">Kattalar qabuli</h2>
                </div>
              </div>
            </div>
            <div className="doctor__center">
              <h2 className="doctor__center-title">Mutaxassis haqida ma'lumot</h2>
              <div className="doctor__center-work">
                <h3 className="doctor__center-description">Ish tajribasi:</h3>
                <span className="doctor__center-span">16 yil.</span>
              </div>
              <div className="doctor__center-main">
                <h3 className="doctor__center-description">
                  <a href="#" className="doctor__center-link">
                    <span className="doctor__center-description">Klinika:</span>
                     Andijon shahridagi ZamZam klinikasi
                  </a>
                </h3>
              </div>
              <h3 className="doctor__center-description">
              Ilmiy daraja:
              </h3>
              <p className="doctor__center-paragraph">
               tibbiyot fanlari nomzodi, oliy toifali doktori.
              </p>
              <ul>
                <h2 className="doctor__center-about">Ixtisosligi:</h2>
                <li className="doctor__center-list">
                 Histeroskop va golmiy lazer yordamida intrauterin patologiyani davolash
                </li>
                <li className="doctor__center-list ">
                Bachadon bo'yni lazer texnologiyasi va radio to'lqinlar yordamida davolash.
                </li>
              </ul>
            </div>
            <div className="doctor__right">
              <h3 className="doctor__right-title">Boshlang'ich narxi:</h3>
              <h2 className="doctor__right-price">121 000 so'm</h2>
              <a href="#" className="doctor__right-btn">
                Qabulga yozilish
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Doctors;
