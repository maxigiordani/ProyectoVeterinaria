/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Footer from './components/Footer';
import NavComponent from './components/Nav';
import MainPage from './components/MainPage';
import PlanDetail from './components/PlanDetail';
import Page404 from './components/Page404';
import ContactUs from './components/ContactUs';
import PacientTable from './components/pacients/PacientTable';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';
import AppointmentTable from './components/appointments/AppointmentTable';
import PacientCreate from './components/pacients/PacientCreate';
import { useEffect, useState } from 'react';
import axios from "../src/components/config/axiosInit"
import PacientEdit from './components/pacients/PacientEdit';
import PageAdmin from './components/pageAdmin/PageAdmin';
import AppointmentCreate from './components/appointments/AppointmentCreate';
import AppointmentEdit from './components/appointments/AppointmentEdit';


function App() {
  const [pacients, setPacients] = useState([]);
  const[appointments, setAppointments]= useState([])

  const URL = import.meta.env.VITE_API_VETERINARIA;
  const URLTURNOS = import.meta.env.VITE_API_APPOINTMENTS; 
console.log(URL)
console.log(URLTURNOS)


const getTurnosAPI= async () => {
  try {
    const res = await axios.get(URLTURNOS);
    setAppointments(res.data)
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
        <NavComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/planes/primeros-pasos" element={<PlanDetail plan="primeros-pasos" />} />
          <Route path="/planes/madurando" element={<PlanDetail plan="madurando" />} />
          <Route path="/planes/adultos" element={<PlanDetail plan="adultos" />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path='/admin' element={<PageAdmin appointments={appointments} getTurnosAPI={getTurnosAPI} />} />
          <Route path='/admin/pacientes' element={<PacientTable pacients={pacients} getAPI={getAPI} />} />

          <Route exact path="/pacient/create" element={<PacientCreate getAPI={getAPI} />} />
          <Route exact path="/pacient/edit/:id" element={<PacientEdit getAPI={getAPI} />} />
          <Route path='/admin/turnos' element={<AppointmentTable appointments={appointments} getTurnosAPI={getTurnosAPI} />}/>
          <Route exact path="/turnos/create" element={<AppointmentCreate getTurnosAPI={getTurnosAPI}/>} />
          <Route exact path="/turnos/edit/:id" element={<AppointmentEdit getTurnosAPI={getTurnosAPI}/>} />

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
