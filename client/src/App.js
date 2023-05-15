import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctor from "./Components/Doctor/Doctor";
import Patient from "./Components/Patient/Patient";
import Doctordata from "./Components/Display/Doctordata";
import Patientdata from "./Components/Display/Patientdata";



function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Doctor />} />
            <Route path="patient" element={<Patient />} />
            <Route path="doctordata" element={<Doctordata />} />
            <Route path="patientdata" element={<Patientdata />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
