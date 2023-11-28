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
import AppointmentTable from './components/AppointmentTable';
import PacientCreate from './components/pacients/PacientCreate';
import { useEffect, useState } from 'react';
import axios from "../src/components/config/axiosInit"


function App() {
  const [pacients, setPacient] = useState([]);
  //usamos la variable entorno
  const URL = import.meta.env.VITE_API_VETERINARIA;
console.log(URL)
  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const res = await axios.get(URL);
      setPacient(res.data.pacientList);
    } catch (error) {
      console.log("error en el server");
    }
  };

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
          <Route path='/admin/pacientes' element={<PacientTable pacients={pacients} getAPI={getAPI}  />}/>
          <Route path='/admin/turnos' element={<AppointmentTable/>}/>
          <Route exact path="/pacient/create" element={<PacientCreate getAPI={getAPI} />} />
        
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
