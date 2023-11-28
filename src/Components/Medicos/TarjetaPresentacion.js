import React from "react";

const TarjetaPresentacion = ({medico}) => {
 

  return (
    <div className="tarjeta-presentacion">
      <img
              src={"img/"+medico.imagen}  // Si userData.fotoURL no está definido, usa una imagen por defecto
              alt="Foto de perfil"
              style={{ width: "150px", borderRadius: "50%" }}
            />
      <div className="info-medico">
        <p>
          <p><strong>Rut:</strong> {medico.numrun}</p>
        </p>
        <p>
          <p><strong>Nombre:</strong> {medico.nombre+" "+medico.apaterno+" "+medico.amaterno}</p>
        </p>
        <p>
          <p><strong>Especialidad:</strong> {medico.desc_especialidad}</p>
        </p>
        
      </div>
    </div>
  );
};

export default TarjetaPresentacion;