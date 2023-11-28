import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate, useLocation } from "react-router-dom";
import { Perfil } from "../Components/Perfil/Perfil";
import { LoginForm } from "../Components/Login/LoginForm";
import { HeaderNav } from "../Components/Layaut/HeaderNav";
import { Footer } from "../Components/Layaut/Footer";
import { Medicos } from "../Components/Medicos/Medicos";
import { Agendas } from "../Components/Medicos/Agendas";
import CrearAgenda from '../Components/Medicos/CrearAgenda';
import { Calendario } from "../Components/Agenda/calendario";

const RouterPrincipal = () => {
  const [userData, setUserData] = useState(null);
  const [medico, setMedico] = useState(null);
  const [loginFormActive, setLoginFormActive] = useState(false);

  const handleLoginFormToggle = () => {
    setLoginFormActive((prevValue) => !prevValue);
  };

  return (
    <BrowserRouter>
      <InnerRouterPrincipal
        userData={userData}
        setUserData={setUserData}
        medico={medico}
        setMedico={setMedico}
        loginFormActive={loginFormActive}
        setLoginFormActive={setLoginFormActive}
        handleLoginFormToggle={handleLoginFormToggle}
      />
    </BrowserRouter>
  );
};

const InnerRouterPrincipal = ({
  userData,
  setUserData,
  medico,
  setMedico,
  loginFormActive,
  setLoginFormActive,
  handleLoginFormToggle,
}) => {
  const location = useLocation();
  const isLoginForm = location.pathname === "/LoginForm";

  return (
    <>
      {!isLoginForm && <HeaderNav />}

      <Routes>
        <Route path="/" element={<Navigate to="/LoginForm" />} />
        <Route
          path="/LoginForm"
          element={<LoginForm onLoginFormSubmit={setUserData} onToggle={handleLoginFormToggle} />}
        />
        <Route path="/Perfil" element={<Perfil userData={userData} />} />
        <Route path="/Medicos" element={<Medicos medicoActual={setMedico} />} />
        <Route path="/Agenda" element={<Agendas datosMedico={setMedico} />} />
        <Route path="/CrearAgenda" element={<CrearAgenda medico={medico} />} />
        <Route path="/Calendario" element={<Calendario/>} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default RouterPrincipal;