// En 'CrearAgenda.js'
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TarjetaAgenda from "./TarjetaAgenda";
import { useNavigate } from "react-router-dom";

const CrearAgenda = () => {

  const navigate = useNavigate();

  const handlePrepararAgenda = () => {
    // Enviar datos del usuario al componente padre
    const medict = medico;

    // Enviar datos a la ruta '/CrearAgenda'
    navigate('/calendario', { state: { medico: medict } });
  };




  const location = useLocation();
  const medico = location.state.medico;

  // Estados para los campos del formulario
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [startHours, setStartHours] = useState({});
  const [endHours, setEndHours] = useState({});

  // Lista de meses y años predispuestos
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const years = [2023, 2024, 2025, 2026]; // Años predispuestos

  // Lista de nombres de los días de la semana
  const daysOfWeek = [
     "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ];

  // Manejar cambios en los campos del formulario
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleStartHourChange = (day, e) => {
    setStartHours({ ...startHours, [day]: e.target.value });
  };

  const handleEndHourChange = (day, e) => {
    setEndHours({ ...endHours, [day]: e.target.value });
  };

  // Resto de tu lógica para la ruta '/CrearAgenda'

  return (
    <div className="tarjeta-agenda">
      <div>
        <img
          src={"img/" + medico.imagen}
          alt="Foto de perfil"
          style={{ width: "150px", borderRadius: "50%" }}
        />
      </div>

      <div className="info-medico">
        <p>
          <strong>Rut:</strong> {medico.numrun}
        </p>
        <p>
          <strong>Nombre:</strong>{" "}
          {medico.nombre + " " + medico.apaterno + " " + medico.amaterno}
        </p>
        <p>
          <strong>Especialidad:</strong> {medico.desc_especialidad}
        </p>

{/* Formulario para seleccionar mes, año y horario */}
<form>
  <div className="form-row">
    <div className="label-container">
      <label>Mes:</label>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="" disabled>Selecciona un mes</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>
    </div>

    <div className="label-container">
      <label>Año:</label>
       
       
       <select value={selectedYear} onChange={handleYearChange}>
        <option value="" disabled>Selecciona un año</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Horario para cada día de la semana */}
  <div class="titulojornada"><h1>Mañana</h1></div>
  <div className="days-hours">
    {daysOfWeek.map((day, index) => (
      <div key={index} className="day-hours">
        <p>{day}</p>
        <div className="input-container">
          <label>Inicio:</label>
          <input
            type="text"
            value={startHours[index + 1] || ""}
            onChange={(e) => handleStartHourChange(index + 1, e)}
          />
        </div>
        <div className="input-container">
          <label>Fin:</label>
          <input
            type="text"
            value={endHours[index + 1] || ""}
            onChange={(e) => handleEndHourChange(index + 1, e)}
          />
        </div>
      </div>
    ))}
  </div>
<div class="titulojornada"><h1>Tarde</h1></div>
  <div className="days-hours">
    {daysOfWeek.map((day, index) => (
      <div key={index} className="day-hours">
        <p>{day}</p>
        <div className="input-container">
          <label>Inicio:</label>
          <input
            type="text"
            value={startHours[index + 1] || ""}
            onChange={(e) => handleStartHourChange(index + 1, e)}
          />
        </div>
        <div className="input-container">
          <label>Fin:</label>
          <input
            type="text"
            value={endHours[index + 1] || ""}
            onChange={(e) => handleEndHourChange(index + 1, e)}
          />
        </div>
      </div>
    ))}
  </div>
</form>

        {/* Resto de la interfaz de usuario */}
        <div className="botones-agenda">
        <button type="submit" onClick={handlePrepararAgenda}>Grabar Agenda</button>
        <button type="submit" >Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CrearAgenda;