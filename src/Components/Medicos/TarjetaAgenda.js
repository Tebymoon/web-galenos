import React from "react";
import { useNavigate } from "react-router-dom";

const TarjetaAgenda = ({ medico }) => {
  const navigate = useNavigate();

  const handlePrepararAgenda = () => {
    // Enviar datos del usuario al componente padre
    const medict = medico;

    // Enviar datos a la ruta '/CrearAgenda'
    navigate('/CrearAgenda', { state: { medico: medict } });
  };

  const handleModificarAgenda = () => {
    // Lógica para modificar la agenda
    console.log("Modificar Agenda");
  };

  const handleEliminarAgenda = () => {
    // Lógica para eliminar la agenda
    console.log("Eliminar Agenda");
  };

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
        <div className="botones-agenda">
          <button onClick={handlePrepararAgenda}>Preparar Agenda</button>
          <button onClick={handleModificarAgenda}>Modificar Agenda</button>
          <button onClick={handleEliminarAgenda}>Eliminar Agenda</button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaAgenda;