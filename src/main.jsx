import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './page/services/services';
import Clinics from './page/clinics/clinics';
import Doctors from './page/doctors/doctors';
import Blog from './page/blog/blog';
// import Intelligence from './page/intelligence/intelligence';
import ClinicsInner from './components/doctors-card/doctors-inner/doctors';
import ClinicsInner1 from './components/clinics-card/clinics-inner/clinics-inner';
import Map from './page/map/map';
import Detail from './page/Clinicdetail/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/clinics",
    element: <Clinics />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  // {
  //   path: "/intelligence",
  //   element: <Intelligence />,
  // },
  {
    path: "/clinics-inner",
    element: <ClinicsInner1 />,
  },
  {
    path: "/doctors-inner",
    element: <ClinicsInner />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path:"/detail",
    element:<Detail />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
