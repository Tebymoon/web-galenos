import React, { useEffect, useState } from "react";
import { cliente } from "../../supabase/client";
import TarjetaPresentacion from "./TarjetaPresentacion";

export const Medicos = () => {


  
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

  return (
    <>
    
      <h1>Listado de Médicos</h1>
      <ul>
        {medicos.map((medico) => (
          <TarjetaPresentacion key={medico.id} medico={medico} />
        ))}
      </ul>
    </>
  );
};