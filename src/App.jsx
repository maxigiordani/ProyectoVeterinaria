import React from 'react';
import Footer from './components/Footer';
import NavComponent from './components/Nav';
import MainPage from './components/MainPage';
import PlanDetail from './components/PlanDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/app.css'
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
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
