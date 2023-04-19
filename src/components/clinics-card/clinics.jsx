import { NavLink } from "react-router-dom";

import Star from "../../assets/svg/star4.svg";
import "./clinics.scss";

import { clinicData } from "../../data/data";

function ClinicsCard() {
  return (
    <section className="clinics">

      {
        clinicData?.slice(0, 6).map((item, index) => {
          return (
            <NavLink to={"/clinics-inner"}>
              <div className="clinics__card">
                    <img
                      src={item.img}
                      alt="This is a clinic card img"
                      className="clinics__top-img"
                    />
                <div className="clinics__bottom">
                  <h2 className="clinics__bottom-title">{item?.name}</h2>
                  <div className="clinics__bottom-item">
                    <a href="#" className="clinics__bottom-link">
                    Batafsil
                    </a>
                  </div>
                </div>
                <div className="clinics__statistic">
                  <a href="#" className="clinics__statistic-links">
                    <img
                      src={Star}
                      alt="This is a star img"
                      className="clinics__statistic-img"
                    />
                    <img
                      src={Star}
                      alt="This is a star img"
                      className="clinics__statistic-img"
                    />
                    <img
                      src={Star}
                      alt="This is a star img"
                      className="clinics__statistic-img"
                    />
                    <img
                      src={Star}
                      alt="This is a star img"
                      className="clinics__statistic-img"
                    />
                    <img
                      src={Star}
                      alt="This is a star img"
                      className="clinics__statistic-img"
                    />
                  </a>
                </div>
              </div>
            </NavLink>
          )
        })
      }
    </section>
  );
}
export default ClinicsCard;
