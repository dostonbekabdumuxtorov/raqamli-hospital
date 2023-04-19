import { NavLink, useNavigate } from "react-router-dom";
import Doktor from "../../assets/svg/doctor_opa.svg";
import "./doctors.scss";

function Doctors({ item }) {
  const navigate = useNavigate()
  return (
    <div >
      <div className="doctors" >
        <div className="doctors__card">
          <div className="doctors__card-top">
            <a href="#" className="doctors__card-link">
              <img
                src={item?.img}
                alt="This is a doctor img"
                className="doctors__card-img"
              />
            </a>
          </div>
          <div className="doctors__title">
            <a href="#" className="doctors__title-link">
              <h2 className="doctors__name">{item?.name} </h2>
              {/* <h2 className="doctors__name">Исаевна</h2> */}
            </a>
            <a href="#" className="doctors__title-link2">
              {item?.job}
            </a>
            <div className="doctors__bottom">
              <button  className="doctors__bottom-link" onClick={()=>{navigate("/doctors-inner",{state:item})}}>
              Batafsil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Doctors;
