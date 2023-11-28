import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cliente } from "../../supabase/client";
import { Calendario } from "../Agenda/calendario";

export const LoginForm = ({ onLoginFormSubmit }) => {

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const { data, error } = await cliente
          .from('usuario')
          .select('*');

        if (error) {
          throw error;
        }

        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (usuario.nombreUsuario === email && usuario.contrasena === contrasena) {
          onLoginFormSubmit(usuario); // Enviar datos del usuario al componente padre
          navigate("/Perfil");
          break;
        } else {
          navigate("/LoginForm");
        }
      }
      
    } catch (error) {
      console.error('Error en la autenticación:', error.message);
    }
  };

  return (
    <>
      <div className="login-container">
      <header className="header">
      <div className="logo">
        <span>CMG</span>
        <h3>Centro Médico Galenos</h3>
      </div>
      </header>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            required
            placeholder=""
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </>
  );
};