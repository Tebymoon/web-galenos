import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <>
      
      <header className="header">
      <div className="logo">
        <span>CMG</span>
        <h3>Centro Médico Galenos</h3>
      </div>
        

        <nav>
          <ul>
            <li>
              {" "}
              <NavLink to="/perfil" className={({isActive})=> isActive ? "active" : ""}>Perfil</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/medicos" className={({isActive})=> isActive ? "active" : ""}>Medicos</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/Agenda" className={({isActive})=> isActive ? "active" : ""}>Agendas</NavLink>
            </li>
            <li>
              {" "}
              <NavLink className={({isActive})=> isActive ? "" : ""}>Recaudación</NavLink>
            </li>
            <li>
              {" "}
              <NavLink className={({isActive})=> isActive ? "" : ""}>Comisiones</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/" className={({isActive})=> isActive ? "active" : ""}>Salir</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
