import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Clinics from "./components/clinics-card/clinics";
import Doctors from "./components/doctors-card/doctors";
import Search from "./components/search/search";
import Aside from "./components/aside/aside";


import DDoctors from "./components/doctors-card/doctors"
import { doctorsData } from "./data/data"
import Container from "./components/container/container";
import ServicesCard from "./components/services-card/services-card";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"auto"
    });
  }, [location.pathname])
  
  document.body.style = 'auto'

  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Container>
        <h2 className="main-title" style={{ margin: '45px 0' }}>Klinikalar</h2>
      </Container>
      <Container>
        <Clinics />
      </Container>
      <Container>
        <h2 className="main-title" style={{ margin: '45px 0' }}>Xizmatlar</h2>
      </Container>
      <Container>
        <ServicesCard />
      </Container>
      <Container>
        <h2 className="main-title" style={{ margin: '45px 0' }}>Shifokorlar</h2>
      </Container>
      <div className="doctors_page" style={{ marginBottom: '100px' }}>
        {
          doctorsData?.slice(0, 8)?.map((item, i) => (
            <DDoctors key={i} item={item} />
          ))
        }
      </div>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
