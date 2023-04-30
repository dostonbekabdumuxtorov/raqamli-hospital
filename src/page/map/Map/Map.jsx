import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Paper, Rating } from "@mui/material";
import { clinics } from "../../../data/clinic";
import { mapOptions } from "./option";
const Map = ({ setCards, Cards }) => {
  const [coordinates, setcoordinates] = useState({
    lat: 40.759929,
    lng: 72.358453,
  });
  const [bounds, setBounds] = useState({});
  const [isMobile, setisMobile] = useState(false);
  
  

  function innerme(id) {
    let newarr = clinics.filter((item) => item.id == id * 1);
    console.log("newarr", newarr);
    setCards(newarr);
  }

  return (
    <div style={{ width: "100%", height: "100vh", }}>
      <GoogleMapReact
        style={{ width: "500px", height: "500px" }}
        bootstrapURLKeys={{ key: "AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        options={mapOptions}
        onChange={(e) => {
          setcoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}

        // onChildClick={(child) => innerme(child)}
      >
        {clinics?.map((place, i) => (
          <Button
            className={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              "&:hover": { zIndex: 2 },
            }}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            onClick={() => innerme(place.id)}
          >

            {
              isMobile ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper className='paper' elevation={3} style={{
                  padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'
                }}>
                  <p variant="subtitle2" >
                    {place.name}
                  </p>
                  <img
                    style={{ width: "100%" ,margin:"10px 0px"}}
                    src={place.img}
                    alt={place.name}
                  />
                  <Rating size="small" value={1} readOnly />
                </Paper>
              )
            }

          </Button>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
