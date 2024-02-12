import React from "react";
import "./App.css";
import Appointments from "./components/Appointments";
import PatientHistory from "./components/PatientHistory";
import TreatmentPlans from "./components/TreatmentPlans";
import Billing from "./components/Billing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Homepage from "./components/homepage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Appointments" element={<Appointments  />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/TreatmentPlans" element={<TreatmentPlans />} />
        <Route path="/PatientHistory" element={<PatientHistory/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
