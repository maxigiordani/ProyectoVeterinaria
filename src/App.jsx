// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../src/components/config/axiosInit';
import Footer from './components/layout/Footer';
import NavComponent from './components/layout/Nav';
import MainPage from './components/pages/MainPage';
import PlanDetail from './components/pages/PlanDetail';
import Page404 from './components/pages/Page404';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import PageLogin from './components/pages/PageLogin';
import PageAdmin from './components/pages/PageAdmin';
import PacientEdit from './components/pacients/PacientEdit';
import PacientTable from './components/pacients/PacientTable';
import PacientCreate from './components/pacients/PacientCreate';
import AppointmentTable from './components/appointments/AppointmentTable';
import AppointmentCreate from './components/appointments/AppointmentCreate';
import AppointmentEdit from './components/appointments/AppointmentEdit';
import Pageunauthorized from './components/pages/Pageunauthorized';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
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
      console.log('error en el server');
    }
  };

  const getAPI = async () => {
    try {
      const res = await axios.get(URL);
      setPacients(res.data);
    } catch (error) {
      console.log('error en el server');
    }
  };

  useEffect(() => {
    getAPI();
    getTurnosAPI();
   
    setIsAdmin(true); 
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
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pagelogin" element={<PageLogin />} />
          <Route path="/pageunauthorized" element={<Pageunauthorized />} />

          <Route
            path="/pageadmin"
            element={
              isAdmin ? (
                <PageAdmin appointments={appointments} getTurnosAPI={getTurnosAPI} />
              ) : (
                <Navigate to="/pageunauthorized" />
              )
            }
          />
     <Route
            path="/admin/pacientes"
            element={
              isAdmin ? (
                <PacientTable pacients={pacients} getAPI={getAPI} />
              ) : (
                <Navigate to="/pageunauthorized" />
              )
            }
          />

 <Route
            exact
            path="/pacient/create"
            element={
              isAdmin ? (
                <PacientCreate getAPI={getAPI} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
            <Route
            exact
            path="/pacient/edit/:id"
            element={
              isAdmin ? (
                <PacientEdit getAPI={getAPI} />
              ) : (
                <Navigate to="/pageunauthorized" />
              )
            }
          />
  <Route
            path="/admin/turnos"
            element={
              isAdmin ? (
                <AppointmentTable appointments={appointments} getTurnosAPI={getTurnosAPI} />
              ) : (
                <Navigate to="/pageunauthorized" />
              )
            }
          />
          <Route
            exact
            path="/turnos/create"
            element={
              isAdmin ? (
                <AppointmentCreate getTurnosAPI={getTurnosAPI} />
              ) : (
                <Navigate to="/pageunauthorized" />
              )
            }
          />
          <Route
            exact
            path="/turnos/edit/:id"
            element={
              isAdmin ? (
                <AppointmentEdit getTurnosAPI={getTurnosAPI} />
              ) : (
                <Navigate to="/pageunauthorized" />
              )
            }
          />

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
