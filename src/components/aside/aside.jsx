import Klinika from "../../assets/svg/klinika.svg";
import Container from "../container/container";
import "./aside.scss";
function Aside() {
  return (
    <Container>
      <div className="aside">
        <div className="aside__about">
          <div className="aside__description">
            <h2 className="aside__title">Raqamli shifoxona</h2>
            <h2 className="aside__title"></h2>
            <a href="#" className="aside__link">
            An'anaviy shifoxona tizimidagi muammolarga raqamli yechim beramiz.
            </a>
          </div>
          <div className="aside__bottom">
            <a href="#" className="aside__bottom-link" style={{textAlign: 'center'}}>Batafsil</a>
          </div>
        </div>
        <div className="aside__img">
          <img src={Klinika} alt="This is a clinic img" />
        </div>
      </div>
    </Container>
  );
}
export default Aside;
