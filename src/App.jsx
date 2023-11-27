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



function App() {
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
          <Route path='/admin-pacientes' element={<PacientTable/>}/>
          <Route path='/admin-turnos' element={<AppointmentTable/>}/>
          <Route path="/pacient-create" element={<PacientCreate/>}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
