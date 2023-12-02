// Importa useState y useEffect directamente desde 'react'
import { useState, useEffect } from 'react';
import Footer from './components/pages/Footer';
import NavComponent from './components/pages/Nav';
import MainPage from './components/pages/MainPage';
import PlanDetail from './components/pages/PlanDetail';
import Page404 from './components/pages/Page404';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import PageLogin from './components/pages/PageLogin';
import PageAdmin from './components/pages/PageAdmin';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';
import axios from "../src/components/config/axiosInit";
import PacientEdit from './components/pacients/PacientEdit'
import PacientTable from './components/pacients/PacientTable';
import PacientCreate from './components/pacients/PacientCreate';
import AppointmentTable from './components/appointments/AppointmentTable';
import AppointmentCreate from './components/appointments/AppointmentCreate';


import AppointmentEdit from './components/appointments/AppointmentEdit';

function App() {

 const isAdmin = true; 
  const [pacients, setPacients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const URL = import.meta.env.VITE_API_VETERINARIA;
  const URLTURNOS = import.meta.env.VITE_API_APPOINTMENTS;

  console.log(URL);
  console.log(URLTURNOS);

  const getTurnosAPI = async () => {
    try {
      const res = await axios.get(URLTURNOS);
      setAppointments(res.data);
    } catch (error) {
      console.log("error en el server");
    }
  };

  const getAPI = async () => {
    try {
      const res = await axios.get(URL);
      setPacients(res.data);
    } catch (error) {
      console.log("error en el server");
    }
  };

  useEffect(() => {
    getAPI();
    getTurnosAPI();
  }, []);

  return (
    <Router>
      <>
      <NavComponent isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/planes/primeros-pasos" element={<PlanDetail plan="primeros-pasos" />} />
          <Route path="/planes/madurando" element={<PlanDetail plan="madurando" />} />
          <Route path="/planes/adultos" element={<PlanDetail plan="adultos" />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='/pageadmin' element={<PageAdmin />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/pagelogin' element={<PageLogin />} />
          <Route path='/admin/pacientes' element={<PacientTable pacients={pacients} getAPI={getAPI} />} />
          <Route exact path="/pacient/create" element={<PacientCreate getAPI={getAPI} />} />
          <Route exact path="/pacient/edit/:id" element={<PacientEdit getAPI={getAPI} />} />
          <Route exact path="/turnos/create" element={<AppointmentCreate getTurnosAPI={getTurnosAPI} />} />
          <Route exact path="/turnos/edit/:id" element={<AppointmentEdit getTurnosAPI={getTurnosAPI}/>} />


         <Route path='/admin/turnos' element={<AppointmentTable appointments={appointments} getTurnosAPI={getTurnosAPI} />} />

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;