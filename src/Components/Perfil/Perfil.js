import React from "react";

export const Perfil = ({ userData }) => {
  return (
    <div className="PerfilUsuario">
      <h1>Perfil de Usuario</h1>
      {userData ? (
        <>
          <img
              src={"img/"+userData.fotoPerfil}  // Si userData.fotoURL no está definido, usa una imagen por defecto
              alt="Foto de perfil"
              style={{ width: "150px", borderRadius: "50%" }}
            />

          <p>
          <p><strong>Usuario:</strong> {userData.nombreUsuario}</p>
        </p>
        <p>
          <p><strong>Nombre:</strong> {userData.nombre+' '+userData.apaterno+' '+userData.amaterno}</p>
        </p>
        <p>
          <p><strong>Cargo:</strong> {userData.cargo}</p>
        </p>
        </>
      ) : (
        <p>No se han proporcionado datos de usuario.</p>
      )}
    </div>
  );
};