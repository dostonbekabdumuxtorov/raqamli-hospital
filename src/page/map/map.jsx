import { NavLink, useNavigate } from "react-router-dom";
import ClinicsCard from "../../components/clinics-card/clinics";
import Header from "../../components/header/header";
import "./map.scss";
import Mapp from "./Map/Map";
import { useState } from "react";
import Star from "../../assets/svg/star4.svg";
import { clinics } from "../../data/clinic";
import { LocationCityRounded } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Map() {
  const [Cards, setCards] = useState(clinics);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();

  document.body.style.overflow = "hidden";

  function on_search(e) {
    let filtered = clinics.filter((item) => {
      return item.name.toLowerCase().includes(e.toLowerCase());
    });

    setCards(filtered);
  }

  function ToDetail(item) {
    navigate("/detail", { state: item });
  }

  return (
    <section className="map">
      <Header />

      <div className="map-wrap">
        <div className="map-wrap__left">
          <div className="map-wrap__left-top">
            <input
              onChange={(e) => on_search(e.target.value)}
              className="map-wrap__left-input"
              type="text"
            />
            <button className="map-wrap__left-btn">Qidiruv</button>
          </div>

          {Cards.length === 0 ? (
            <h1>Topilmadi...</h1>
          ) : (
            Cards.map((item) => (
              <div to={"/clinics-inner"}>
                <div className="card-container">
                  <img
                    src={item.img}
                    alt="This is a clinic card img"
                    className="clinics__top-img"
                  />
                  <div className="clinics__bottom1">
                    <h2>{item?.name}</h2>
                    <p className="tarif">{item.description}</p>
                    <p className="docs">
                      <p>
                        <AvatarGroup max={4}>
                          {item.doctors?.map((t, i) => (
                            <Avatar alt="Remy Sharp" src={t.img} />
                          ))}
                        </AvatarGroup>
                      </p>
                    </p>
                    <div className="box">
                      <LocationOnIcon />
                      <p>{item.addres}</p>
                    </div>
                    <div className="box">
                      <CallIcon />
                      <p>{item.tel}</p>
                    </div>
                    <div className="box">
                      <QueryBuilderIcon />
                      <p>{item.workTime}</p>
                    </div>
                    <Accordion
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        backgroundColor: "#F6F6F8",
                        border: "2px solid #e5e2e2",
                        borderRadius: "5px",
                        marginTop: 10,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ backgroundColor: "none", border: "none" }}
                      >
                        <Typography style={{ fontFamily: "Poppins" }}>
                          Bo'limlar
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul className="mainlist">
                            {Object.keys(item.clinicSection[0]).map((r) => (
                              <li className="sections">{r}</li>
                            ))}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <div style={{ marginTop: 20 }}>
                      <Button
                        style={{
                          backgroundColor: "#00B288",
                        }}
                        fullWidth
                        variant="contained"
                        onClick={() => ToDetail(item)}
                      >
                        Batafsil
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="map-wrap__right">
          <div
            style={{ position: "relative", overflow: "hidden", width: "100%" }}
          >
            <Mapp Cards={Cards} setCards={setCards} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
