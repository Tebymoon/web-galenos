import React, { useEffect, useState } from "react";
import { cliente } from "../../supabase/client";
import TarjetaAgenda from "./TarjetaAgenda";

export const Agendas = ({medic}) => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const obtenerMedicos = async () => {
      try {
        const { data: medicosData, error: medicosError } = await cliente
          .from('medico')
          .select('*');

        if (medicosError) {
          throw medicosError;
        }

        const especialidadesPromises = medicosData.map(async (medico) => {
          const { data: especialidadData, error: especialidadError } = await cliente
            .from('especialidad')
            .select('desc_especialidad')
            .eq('id_especialidad', medico.id_especialidad)
            .single();

          if (especialidadError) {
            throw especialidadError;
          }

          return {
            ...medico,
            desc_especialidad: especialidadData.desc_especialidad,
          };
        });

        const medicosConEspecialidades = await Promise.all(especialidadesPromises);

        setMedicos(medicosConEspecialidades);
      } catch (error) {
        console.error('Error al obtener médicos:', error.message);
      }
    };

    obtenerMedicos();
  }, []);

    // Obtener la fecha actual
const fechaActual = new Date();

// Formatear la fecha como una cadena (por ejemplo, "2023-11-27 12:34:56")
const formatoFecha = `${fechaActual.getDate()}/${agregarCero(fechaActual.getMonth() + 1)}/${agregarCero(fechaActual.getFullYear())}`;

// Función para agregar un cero delante de un número si es necesario
function agregarCero(numero) {
  return numero < 10 ? `0${numero}` : numero;
}


// Obtener el primer día del próximo mes
const primerDiaProximoMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 1);

// Calcular la diferencia en días
const milisegundosPorDia = 24 * 60 * 60 * 1000; // 1 día en milisegundos
const diasRestantes = Math.floor((primerDiaProximoMes - fechaActual) / milisegundosPorDia);

  return (
    <>
      <h1>Agendas</h1>
      <h2><strong>Fecha Actual: </strong>{formatoFecha}</h2>
      <ul>
        {medicos.map((medico) => (
          <TarjetaAgenda key={medico.id} medico={medico} />
         
        ))}
      </ul>
    </>
  );
};