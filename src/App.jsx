import React from 'react';
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
import axios from "../src/components/config/axiosInit"
import PacientEdit from './components/pacient/PacientEdit';
import PacientTable from './components/pacients/PacientTable';
import PacientCreate from './components/pacients/PacientCreate';
import AppointmentTable from './components/appointments/AppointmentTable';



function App() {
  const isAdmin = true; 



  
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
          <Route path="/loginpage" element={<PageLogin />} />
          <Route path="/pageadmin" element={<PageAdmin />} />
          <Route exact path="/pacient/edit/:id" element={<PacientEdit/>} />
          <Route path='/admin/pacientes' element={<PacientTable />}/>
          <Route exact path="/pacient/create" element={<PacientCreate />} />
          <Route path='/admin/turnos' element={<AppointmentTable />}/>

          

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;